CREATE TABLE IF NOT EXISTS users (
	hash BLOB, 
	name TEXT, 
	email TEXT
);

CREATE TABLE IF NOT EXISTS topics (
	name TEXT, 
	entry_count INTEGER
);

CREATE TABLE IF NOT EXISTS entries (
	user_id INTEGER, 
	topic_id INTEGER, 
	entry_index INTEGER, 
	entry_date TEXT, 
	content TEXT
);