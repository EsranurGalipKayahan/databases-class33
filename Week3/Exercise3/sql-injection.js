import { openConnection, closeConnection } from "./connection.js";
import mysql from "mysql";

let connection = "";

try {
  /*To display all the population, we can inject  "OR 1=1" to name or code variable
  with ' and # charachters to avoid the SQL syntax error
  */
  connection = openConnection();
  const table = "Country",
    // name = "netherlands' OR 1=1#",
    name = "netherlands",
    code = `1' OR 1=1#`;
  getPopulation(table, name, code, (err, result) => {
    if (err) throw err;
    console.table(result);
  });

  robustGetPopulation(table, name, code, (err, result) => {
    if (err) throw err;
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++");
    if (result.message) console.log(result.message);
    else console.table(result);
    closeConnection();
  });
} catch (error) {
  console.error(error.message);
  closeConnection();
}
//In this function we can use placeholder or mysql.escape function
function robustGetPopulation(table, name, code, cb) {
  connection.query(
    `SELECT Population FROM ?? WHERE Name = ? and code=?`,
    [table, name, code],
    function (err, result) {
      if (err) cb(err);
      cb(null, result);
    }
  );
}
function getPopulation(table, name, code, cb) {
  connection.query(
    `SELECT Population FROM ${table} WHERE Name = '${name}' and code ='${code}'`,
    function (err, result) {
      if (err) cb(err);
      cb(null, result);
    }
  );
}
