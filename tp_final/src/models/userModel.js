var pool = require("../database.js");
var md5 = require('md5');

async function getUser(user, password) {
    try {
        var query = "SELECT * FROM users WHERE name = ? AND password = ? limit 1";
        var rows = await pool.query(query, [user, md5(password)]);
        return rows[0];
    } catch (error) {
        throw error;
    }
}

module.exports = { getUser }