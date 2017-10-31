const insert = db => {
  const query = `
INSERT INTO users (username, email, password, name, bio) VALUES
  ("admin", "admin@profezzi.com", "supersecret1", "Administrator", "Superman"),
  ("mhaidarh", "me@mhaidaranif.com", "supersecret1", "M Haidar Hanif", "Educator"),
  ("impactbyte", "admin@impactbyte.com", "supersecret2", "Impact Byte", "Coding Bootcamp"),
  ("hacktiv8", "admin@hacktiv8.com", "supersecret3", "Hacktiv8", "Coding Bootcamp"),
  ("refactory", "admin@refactory.com", "supersecret4", "Refactory.id", "Coding Bootcamp"),
  ("binar","admin@binar.id", "supersecret5", "Binar Academy", "Coding Bootcamp");
`

  db.serialize(function() {
    var statement = db.prepare(query)
    statement.run()
    statement.finalize()
  })
}

module.exports = insert
