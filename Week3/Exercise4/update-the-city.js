const MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://admin:12345@cluster0.oundx.mongodb.net";

const updateTheCity = async () => {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const result = await client
      .db("world")
      .collection("city")
      .findOneAndUpdate(
        { ID: "TRY1001" },
        { $set: { Population: "2130359" } },
        { returnDocument: "after", returnOriginal: false }
      );

    if (result.value) {
      console.log("Updated successfully!");
      console.table(result.value);
    } else console.log("Updation is not done!");
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
};

updateTheCity();
