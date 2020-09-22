import sqlite3
from flask import g
import os
import hashlib
import bcrypt # https://github.com/pyca/bcrypt/

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

@public
def register_close(app):
    @app.teardown_appcontext
    def close_connection(exception):
        db = getattr(g, '_database', None)
        if db is not None:
            db.close()

@public
def init(app):
    with app.app_context():
        db = get_db()
        with app.open_resource('schema.sql', mode='r') as f:
            db.cursor().executescript(f.read())
        db.commit()

##@public
##def register_user():
##    
