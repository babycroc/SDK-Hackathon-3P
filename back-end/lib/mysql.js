var mysql = require("mysql");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: /* PASSWORD */,
  database: "side2_3P",
});
db.connect();

module.exports = db;
