import {
  openConnection,
  closeConnection,
  beginTransaction,
  commit,
} from "../db-utils/connection.js";

try {
  const execQuery = openConnection();

  await execQuery("SET autocommit=0;");
  await beginTransaction();
  await execQuery(
    "UPDATE account SET balance=balance-1000 WHERE account_number=101;"
  );
  await execQuery(
    "UPDATE account SET balance=balance+1000 WHERE account_number=102;"
  );
  await execQuery(
    "INSERT INTO account_changes VALUES(101,102,1000,now(),'Salary');"
  );
  await commit();
  await execQuery("SET autocommit=1;");
} catch (error) {
  console.error(error);
} finally {
  closeConnection();
}
