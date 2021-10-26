import { CONN_CLS_MSG, CONN_SCSS_MSG, HOST } from "./constants.js";
import keys from "./keys.js";
import util from "util";
import mysql from "mysql";

let connection;
const createConnection = () => {
  return mysql.createConnection({
    host: HOST,
    user: keys.dbUser,
    password: keys.dbPassword,
    database: keys.database,
  });
};
export const openConnection = () => {
  connection = createConnection();
  console.log(CONN_SCSS_MSG);
  const execQuery = util.promisify(connection.query.bind(connection));
  connection.connect();
  return execQuery;
};
export const beginTransaction = () => {
  return util.promisify(connection.beginTransaction).bind(connection)();
};
export const commit = () => {
  return util.promisify(connection.commit).bind(connection)();
};
export const closeConnection = () => {
  connection.end();
  console.log(CONN_CLS_MSG);
};
