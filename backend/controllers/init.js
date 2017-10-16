const init = db => {
  db.serialize(function() {
    db.run(`
    CREATE TABLE IF NOT EXISTS users (
       id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
       username VARCHAR(20),
       email VARCHAR(100),
       password VARCHAR(50),
       name VARCHAR(50),
       bio TEXT
    );`)
  })
}

module.exports = init
