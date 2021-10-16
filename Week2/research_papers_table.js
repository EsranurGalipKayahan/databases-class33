
import  { openConnection, closeConnection } from './connection.js';
import {  create_papers_owners_table, create_research_papers_table } from './sqls.js';
import { papers } from './data.js';

  try {
    const execQuery = openConnection();
    
    await execQuery(create_research_papers_table());
    await execQuery(create_papers_owners_table());

    papers.forEach(async paper => {
        await execQuery('INSERT INTO research_papers SET ?', paper);
      });
      
  } catch (error) {
    console.error(error);
  }finally{
    closeConnection();
  }