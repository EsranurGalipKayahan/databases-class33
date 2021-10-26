import { openConnection, closeConnection } from "../db-utils/connection.js";
import { accounts, account_changes } from "./data.js";

try {
  const execQuery = openConnection();

  accounts.forEach(async (account) => {
    await execQuery("INSERT INTO account SET ?", account);
  });
  account_changes.forEach(async (changes) => {
    await execQuery("INSERT INTO account_changes SET ?", changes);
  });
} catch (error) {
  console.error(error);
} finally {
  closeConnection();
}
