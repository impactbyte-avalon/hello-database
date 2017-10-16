const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./socialmedia.db")

db.serialize(function() {
  db.each("SELECT * FROM users", function(err, row) {
    console.log(row)
  })
})

db.close()
