const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password:"_Ager30401",
    database: "workoutDataBase",
    port: 5432
});

module.exports = pool;