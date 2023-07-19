// Rename this file to db.js
// still debugging .env

const Pool = require("pg").Pool;

const pool = new Pool({
    user: "your postgres username",
    password: "your postgres password",
    host: "your host",
    port: "your port",
    database: "todo"
});
module.exports = pool;