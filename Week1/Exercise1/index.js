import {
  openConnection,
  createDb,
  createTables,
  fillTheTables,
  showAllTables,
  deleteDb,
  closeConnection,
} from "./dbOperation.js";

openConnection();
createDb();
createTables();
fillTheTables();
showAllTables();
deleteDb();
closeConnection();
