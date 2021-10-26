import mysql from "mysql";
import keys from "./keys.js";

let connection;
const createConnection = () => {
  return mysql.createConnection({
    host: keys.HOST,
    user: keys.dbUser,
    password: keys.dbPassword,
    database: keys.database,
  });
};
export const openConnection = () => {
  connection = createConnection();
  console.log("Connection established...");
  connection.connect();
  return connection;
};
export const closeConnection = () => {
  connection.end();
  console.log("Connection closed...");
};
