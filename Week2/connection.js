import { HOST } from '../Week1/Exercise1/sources/constants.js';
import keys from '../Week1/Exercise1/sources/keys.js'
import util from 'util';
import  mysql from 'mysql';

let connection;
const createConnection = () =>{
    return mysql.createConnection({
        host: HOST,
        user: keys.dbUser,
        password: keys.dbPassword,
        database: keys.database,
      });
     
}
export const openConnection = () =>{ 
    connection = createConnection();
    const execQuery = util.promisify(connection.query.bind(connection));         
    connection.connect();
    return  execQuery;
}
export const closeConnection = () =>{
    connection.end();
}
