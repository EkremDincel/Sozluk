from flask import Flask
from flask import request
import sql

app = Flask(__name__)
sql.register_close(app)
sql.init(app)

@app.route('/')
def index():
    """Render main page."""

@app.route('/login', methods = ['GET', 'POST'])
def login():
    if request.method == 'GET':
        """Load login page."""
    if request.method == 'POST':
        """Check for login request."""

@app.route('/signin', methods = ['GET', 'POST'])
def signin():
    if request.method == 'GET':
        """Load signin page."""
    if request.method == 'POST':
        """Check for signin request."""

@app.route('/topic/<topic_name>')
def topic(topic_name):
    return topic_name

@app.route('/user/<user_name>')
def user(user_name):
    return user_name
