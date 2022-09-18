const Pool = require("pg").Pool;

const pool = new Pool({
    user: "willhelliwell",
    localhost: "localhost",
    port: 5432,
    database: "pern_todo"
});

module.exports = pool