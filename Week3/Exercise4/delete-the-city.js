const MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://admin:12345@cluster0.oundx.mongodb.net";

const deleteTheCity = async () => {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const result = await client
      .db("world")
      .collection("city")
      .findOneAndDelete({ ID: "TRY1001" });
    if (result.lastErrorObject.n) console.log("Delete successfully...");
    else console.log("Error occured!..");
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
};

deleteTheCity();
