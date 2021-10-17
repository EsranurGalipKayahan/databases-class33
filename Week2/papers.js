import { openConnection, closeConnection } from "./connection.js";
import {
  create_papers_owners_table,
  create_research_papers_table,
} from "./ddl_sqls.js";
import { papers, papers_owners } from "./data.js";

try {
  const execQuery = openConnection();

  await execQuery(create_research_papers_table());
  await execQuery(create_papers_owners_table());

  papers.forEach(async (paper) => {
    await execQuery("INSERT INTO research_papers SET ?", paper);
  });
  papers_owners.forEach(async (owner) => {
    await execQuery("INSERT INTO papers_owners SET ?", owner);
  });
} catch (error) {
  console.error(error);
} finally {
  closeConnection();
}
