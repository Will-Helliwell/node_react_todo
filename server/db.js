const Pool = require("pg").Pool;

const pool = new Pool({
    user: "willhelliwell",
    localhost: "localhost",
    port: 5432,
    database: "node_react_todo"
});

module.exports = pool