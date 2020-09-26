import sqlite3
from flask import g
import os
import hashlib
import datetime
import bcrypt # https://github.com/pyca/bcrypt/

class TopicNotExists(ValueError):
    "Raises when requested topic not exists."
class UserNotExists(ValueError):
    "Raises when requested user not exists."
class UserAlreadyExists(ValueError):
    "Raises when trying to register a user with already existing name."

__all__ = []
def public(f):
    __all__.append(f.__name__)
    return f

# https://flask.palletsprojects.com/en/1.1.x/patterns/sqlite3/

DATABASE = 'database.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
        db.row_factory = sqlite3.Row
    return db

def get_cursor():
    return get_db().cursor()

def get_rowid_of_table(table: str):
    return get_cursor().execute('SELECT seq FROM sqlite_sequence WHERE name=?', (table, ))["seq"]

@public
def register_close(app):
    @app.teardown_appcontext
    def close_connection(exception):
        db = getattr(g, '_database', None)
        if db is not None:
            db.commit()
            db.close()

@public
def init(app):
    "Initialize the database."
    with app.app_context():
        db = get_db()
        with app.open_resource('schema.sql', mode='r') as f:
            db.cursor().executescript(f.read())
        db.commit()

@public
def register_user(name: str, password: str, email: str):
    """Register a new user.
Raises [UserAlreadyExists] if user name is not available.
Returns [None]."""
    if not find_user(name):
        pwhash = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
        get_cursor().execute('INSERT INTO users VALUES (?, ?, ?)', (pwhash, name, email))
        return
    raise UserAlreadyExists()

@public
def confirm_user(name: str, password: str):
    """Confirm a user and their password.
Raises [UserNotExists] if [name] or [password] is wrong."""
    user = find_user(name) 
    if user:
        if bcrypt.checkpw(password.encode(), user["hash"]):
            return user            
    raise UserNotExists()

@public
def find_user(name: str):
    "Find the user by name [name] and return."
    return get_cursor().execute('SELECT rowid, * FROM users WHERE name = ?', (name,)).fetchone()    

@public
def get_topic_id(topic_name: str):
    """Get the rowid of topic which named [topic_id].
Raises [TopicNotExists] if topic do not exists."""
    topic_id = get_cursor().execute('SELECT rowid FROM topics WHERE name = ?', (topic_name,)).fetchone()
    if topic_id is None:
        raise TopicNotExists()
    return topic_id["rowid"]

def update_entry_count_of_topic(topic_id: int):
    """Increase [entry_count] column of topic row which has [rowid] of [topic_id] by one and return the new [entry_count] value."""
    cursor = get_cursor()
    new_id = cursor.execute("SELECT entry_count FROM topics WHERE rowid = ?", (topic_id,)).fetchone()["entry_count"] + 1
    cursor.execute("UPDATE topics SET entry_count = ?", (new_id,))
    return new_id

def crate_topic(topic_name: str, entry_count: int) -> int:
    """Create a new topic named [topic_name] which has [entry_count] entries. Returns the [rowid] of newly added topic."""
    cursor = get_cursor()
    cursor.execute("INSERT INTO topics VALUES (?, ?)", (topic_name, entry_count))
    return cursor.execute("SELECT last_insert_rowid()").fetchone()

@public
def add_entry_to_topic(topic_name: str, user_name: str, user_password: str, content: str):
    """Add a new entry to the topic."""
    user_id = confirm_user(user_name, user_password)["rowid"]
    try:
        topic_id = get_topic_id(topic_name)
    except TopicNotExists:
        entry_index = 0
        topic_id = crate_topic(topic_name, entry_index)
    else:
        entry_index = update_entry_count_of_topic(topic_id)
    date = datetime.datetime.now()
    today = ".".join(map(str, (date.year, date.month, date.day))) + " " + str(date.hour) + ":" + str(date.minute)
    get_cursor().execute("INSERT INTO entries VALUES (?, ?, ?, ?, ?)", (user_id, topic_id, entry_index, today, content))
        

@public
def get_topic_entries(topic_name: str, start: int, count: int):
    """Get the entries of a topic."""
    topic_id = get_topic_id(topic_name)
    entries = get_cursor().execute("""SELECT
                                        user.name,
                                        entry_date,
                                        content
                                    FROM entries
                                    LEFT JOIN users user ON
                                        user.rowid = user_id
                                    WHERE ( ? > entry_index > ? AND topic_id = ? )""", (start, count, topic_id)).fetchall()
    return dict(entries)

if __name__ == "__main__":
    from flask import Flask
    app = Flask(__name__)
    register_close(app)
    with app.app_context():
        init(app)
        add_entry_to_topic("python", "ekrem", "şifrem", "bir dil.")
        a=get_topic_entries("python",0,1)



