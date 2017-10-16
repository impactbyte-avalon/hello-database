const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./socialmedia.db")

db.serialize(function() {
  db.run(`
  CREATE TABLE users (
     id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
     username VARCHAR(20),
     email VARCHAR(100),
     password VARCHAR(50),
     name VARCHAR(50),
     bio TEXT
  );`)
})

db.close()
