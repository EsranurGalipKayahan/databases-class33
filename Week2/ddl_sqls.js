export const create_author_table = () => {
  const CREATE_AUTHOR_TABLE = `
      CREATE TABLE IF NOT EXISTS authors (
        author_no INT PRIMARY KEY,
        author_name VARCHAR(50),
        university VARCHAR(50),
        date_of_birth DATE,
        h_index INT,
        gender ENUM('m', 'f')
      );`;
  return CREATE_AUTHOR_TABLE;
};
export const add_mentor_column = () => {
  const ADD_COLUMN =
    "ALTER TABLE authors ADD COLUMN mentor INT, ADD FOREIGN KEY fk(mentor) REFERENCES authors(author_no);";
  return ADD_COLUMN;
};
export const create_research_papers_table = () => {
  const CREATE_RESEARCH_PAPERS_TABLE = `
      CREATE TABLE IF NOT EXISTS research_papers (
        paper_id INT PRIMARY KEY,
        paper_title VARCHAR(50),
        conference VARCHAR(50),
        publish_date DATE);`;
  return CREATE_RESEARCH_PAPERS_TABLE;
};
export const create_papers_owners_table = () => {
  const CREATE_PAPERS_OWNERS_TABLE = `
      CREATE TABLE IF NOT EXISTS papers_owners (
        paper_id INT,
        author_no INT,
        CONSTRAINT PRIMARY KEY pk(paper_id,author_no),
        FOREIGN KEY fk1(paper_id) REFERENCES research_papers(paper_id),
        FOREIGN KEY fk2(author_no) REFERENCES authors(author_no));`;
  return CREATE_PAPERS_OWNERS_TABLE;
};
