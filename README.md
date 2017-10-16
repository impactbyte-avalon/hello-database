# Hello Database

Experimenting with relational and SQL database.

## Database Schema

### `Users`

field    | type    | size
---------|---------|-----
id       | integer | -
username | string  | 20
email    | string  | 100
password | string  | 50
name     | string  | 50
bio      | text    | -

#### Examples in Table

id | username | email | password | name | bio
---|----------|-------|----------|------|----
0  | admin      | admin@profezzi.com   | supersecret1 | Administrator  | Superman
1  | mhaidarh   | me@mhaidaranif.com   | supersecret1 | M Haidar Hanif | Educator
2  | impactbyte | admin@impactbyte.com | supersecret2 | Impact Byte    | Coding Bootcamp
3  | hacktiv8   | admin@hacktiv8.com   | supersecret3 | Hacktiv8       | Coding Bootcamp
4  | refactory  | admin@refactory.com  | supersecret4 | Refactory.id   | Coding Bootcamp
5  | binar      | admin@binar.id       | supersecret5 | Binar Academy  | Coding Bootcamp

--------------------------------------------------------------------------------

### `Posts`

| field    | type    | size
|----------|---------|-----
| id       | integer | -
| userId   | integer | -
| content  | string  | 140
