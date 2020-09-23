CREATE TABLE IF NOT EXISTS users (hash BLOB, name TEXT, email TEXT);
CREATE TABLE IF NOT EXISTS topics (name TEXT, entries BLOB);
CREATE TABLE IF NOT EXISTS entries (user_id INTEGER, topic_id INTEGER, date TEXT, content TEXT);