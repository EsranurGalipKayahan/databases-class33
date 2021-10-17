import { openConnection, closeConnection } from "./connection.js";

const execQuery = openConnection();

const processQuery = async (query) => {
  const res_of_query = await execQuery(query);

  console.table(res_of_query);

  console.log(
    "\n*********************************************************************************"
  );
};
const AUTHORS_AND_MENTORS =
  "SELECT a.author_name AS Author, m.author_name AS Mentor FROM authors a CROSS JOIN authors m ON a.mentor=m.author_no;";
const AUTHORS_AND_PAPERS =
  "SELECT a.author_name AS Author, p.paper_title AS Paper FROM authors a LEFT JOIN papers_owners po ON a.author_no = po.author_no LEFT JOIN research_papers p ON po.paper_id=p.paper_id;";
try {
  processQuery(AUTHORS_AND_MENTORS);
  processQuery(AUTHORS_AND_PAPERS);
} catch (error) {
  console.error(error);
} finally {
  closeConnection();
}
