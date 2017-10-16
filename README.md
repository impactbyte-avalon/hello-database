# Hello Database

Experimenting with relational and SQL database.

## Database Schema

### User

field    | type    | size
---------|---------|-----
id       | integer | -
username | string  | 20
email    | string  | 100
password | string  | 50
fullName | string  | 50
bio      | text    | -

Examples:

```
id: 1
username: "mhaidarh"
email: "me@mhaidarhanif.com"
password: "supersecret0"
fullName: "M Haidar Hanif"
bio: "Educator of Impact Byte"
```

```
id: 2
username: "impactbyte"
email: "admin@impactbyte.com"
password: "supersecret1"
fullName: "Impact Byte"
bio: "Educator of Impact Byte"
```

### Posts

| field    | type    | size
|----------|---------|-----
| id       | integer | -
| userId   | integer | -
| content  | string  | 140
