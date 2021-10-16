
import  { openConnection, closeConnection } from './connection.js';
import { authors } from './data.js';
import { add_mentor_column, create_author_table } from './sqls.js';

  try {
    const execQuery = openConnection();
    
    await execQuery(create_author_table());
    await execQuery(add_mentor_column());

    authors.forEach(async author => {
      await execQuery('INSERT INTO authors SET ?', author);
    });

  } catch (error) {
    console.error(error);
  }finally{
    closeConnection();
  }