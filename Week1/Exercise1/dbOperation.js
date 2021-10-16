import mysql from "mysql";
import { CONN_CLS_MSG, CONN_SCSS_MSG, HOST } from "./sources/constants.js";
import { inviteeList, meetingList, roomList } from "./sources/data.js";
import keys from "./sources/keys.js";
import {
  add_foreign_key,
  createDatabase,
  create_invitee_table,
  create_meeting_table,
  create_room_table,
  deleteDatabase,
  displayAllItems,
  insert_into_table,
  useDb,
} from "./utils/sqls.js";

let connection;

export const openConnection = () => {
  connection = mysql.createConnection({
    host: HOST,
    user: keys.dbUser,
    password: keys.dbPassword,
  });
  connection.connect((err) => {
    if (err) throw err;
    console.log(CONN_SCSS_MSG);
  });
};
export const createDb = () => {
  connection.query(createDatabase("meetup"), function (err, results, fields) {
    if (err) throw err;
  });
  connection.query(useDb("meetup"), function (err, results, fields) {
    if (err) throw err;
  });
};

export const createTables = () => {
  connection.query(create_invitee_table(), (err, results, fields) => {
    if (err) throw err;
  });
  connection.query(create_room_table(), (err, results, fields) => {
    if (err) throw err;
  });
  connection.query(create_meeting_table(), (err, results, fields) => {
    if (err) throw err;
  });
  connection.query(add_foreign_key(), (err, results, fields) => {
    if (err) throw err;
  });
};
export const fillTheTables = () => {
  const insertAllList = (array, tableName) => {
    array.forEach((obj) => {
      const query = insert_into_table(tableName);
      connection.query(query, obj, (err, results, fields) => {
        if (err) throw err;
      });
    });
  };
  insertAllList(inviteeList, "invitee");
  insertAllList(roomList, "room");
  insertAllList(meetingList, "meeting");
};
export const showAllTables = () => {
  connection.query(displayAllItems("invitee"), (err, results, fields) => {
    if (err) throw err;
    console.log("Invitees in the INVITEE TABLE : ", results);
  });
  connection.query(displayAllItems("room"), (err, results, fields) => {
    if (err) throw err;
    console.log("Rooms in the ROOM TABLE : ", results);
  });
  connection.query(displayAllItems("meeting"), (err, results, fields) => {
    if (err) throw err;
    console.log("Meetings in the MEETING TABLE : ", results);
  });
};
export const deleteDb = () => {
  connection.query(deleteDatabase("meetup"), (err, results, fields) => {
    if (err) throw err;
  });
};
export const closeConnection = () => {
  connection.end((err) => {
    if (err) console.log(err);
    console.log(CONN_CLS_MSG);
  });
};