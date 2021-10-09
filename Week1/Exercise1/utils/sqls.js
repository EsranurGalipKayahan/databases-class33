export const createDatabase = (dbName) => {
  const create_query = `CREATE DATABASE ${dbName}`;
  return create_query;
};
export const useDb = (dbName) => {
  const query = `USE ${dbName}`;
  return query;
};
export const showTables = () => {
  return "SHOW TABLES";
};
export const showTableDefinition = (tableName) => {
  return `DESCRIBE ${tableName}`;
};
export const create_invitee_table = () => {
  return "CREATE TABLE Invitee(invitee_no INT, invitee_name VARCHAR(50), invited_by VARCHAR(50),PRIMARY KEY(invitee_no))";
};
export const create_room_table = () => {
  return "CREATE TABLE Room(room_no INT, room_name VARCHAR(50), floor_number INT, PRIMARY KEY(room_no))";
};
export const create_meeting_table = () => {
  return "CREATE TABLE Meeting(meeting_no INT, meeting_title VARCHAR(50), starting_time DATETIME, ending_time DATETIME,room_no INT, PRIMARY KEY(meeting_no))";
};
export const add_foreign_key = () => {
  return "ALTER TABLE Meeting ADD CONSTRAINT fk FOREIGN KEY (room_no) REFERENCES Room(room_no)";
};
export const insert_into_table = (tableName) => {
  let query = `INSERT INTO ${tableName} SET?`;
  return query;
};
export const displayAllItems = (tableName) => {
  const query = `SELECT * FROM ${tableName}`;
  return query;
};
export const deleteDatabase = (dbName) => {
  const delete_query = `DROP DATABASE ${dbName}`;
  return delete_query;
};
