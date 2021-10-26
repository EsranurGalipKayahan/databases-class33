import { openConnection, closeConnection } from "../db-utils/connection.js";
import {
  create_account_changes_table,
  create_account_table,
} from "./ddl_sqls.js";

try {
  const execQuery = openConnection();

  await execQuery(create_account_table());
  await execQuery(create_account_changes_table());
} catch (error) {
  console.error(error);
} finally {
  closeConnection();
}
