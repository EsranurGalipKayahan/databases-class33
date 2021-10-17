import { openConnection, closeConnection } from "./connection.js";

const execQuery = openConnection();

const processQuery = async (query) => {
  const res_of_query = await execQuery(query);

  console.table(res_of_query);

  console.log(
    "\n*********************************************************************************"
  );
};
const PAPERS_AND_NOF_AUTHORS =
  "SELECT r.paper_title AS Paper, COUNT(*) AS 'Number of Authors' FROM papers_owners po JOIN research_papers r ON po.paper_id = r.paper_id GROUP BY po.paper_id;";
const NOF_PAPERS_BY_FEMALE_AUTHORS =
  "SELECT COUNT(DISTINCT (po.paper_id)) 'Number of papers written by female' FROM authors a JOIN papers_owners po ON a.author_no = po.author_no WHERE a.gender ='f';";
const AVG_OF_H_INDEX =
  "SELECT university AS University , AVG(h_index) 'Average of h index' FROM authors GROUP BY university;";
const NOF_PAPERS_PER_UNI =
  "SELECT university AS University , COUNT(DISTINCT (po.paper_id)) 'Number of Papers' FROM authors a JOIN papers_owners po ON a.author_no = po.author_no GROUP BY university;";
const MIN_MAX_H_INDEX_PER_UNI =
  "SELECT university AS University , MIN(h_index) 'Minimum h index', MAX(h_index) 'Maximum h index' FROM authors GROUP BY university;";

try {
  processQuery(PAPERS_AND_NOF_AUTHORS);
  processQuery(NOF_PAPERS_BY_FEMALE_AUTHORS);
  processQuery(AVG_OF_H_INDEX);
  processQuery(NOF_PAPERS_PER_UNI);
  processQuery(MIN_MAX_H_INDEX_PER_UNI);
} catch (error) {
  console.error(error);
} finally {
  closeConnection();
}
