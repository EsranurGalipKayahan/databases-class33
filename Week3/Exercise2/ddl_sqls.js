export const create_account_table = () => {
  const CREATE_ACCOUNT_TABLE = `
      CREATE TABLE IF NOT EXISTS account (
        account_number INT PRIMARY KEY,
        balance DECIMAL);`;
  return CREATE_ACCOUNT_TABLE;
};

export const create_account_changes_table = () => {
  const CREATE_ACCOUNT_CHANGES_TABLE = `
      CREATE TABLE IF NOT EXISTS account_changes (
        change_number INT,
        account_number INT,
        amount DECIMAL,
        date TIMESTAMP,
        remark TEXT,
        PRIMARY KEY(change_number,account_number,date),
        FOREIGN KEY(account_number) REFERENCES account(account_number) ON DELETE CASCADE,
        FOREIGN KEY(change_number) REFERENCES account(account_number) ON DELETE CASCADE);`;
  return CREATE_ACCOUNT_CHANGES_TABLE;
};
