const mysql = require("mysql2");

const client = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user:"root",
    password:"admin",
    database:"homesystem"
})

module.exports = client;