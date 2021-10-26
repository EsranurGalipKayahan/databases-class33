const MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://admin:12345@cluster0.oundx.mongodb.net";

const seedDatabase = async () => {
  const client = new MongoClient(url);
  try {
    await client.connect();
    var city = {
      ID: "TRY1001",
      Name: "Izmir",
      CountryCode: "TUR",
      District: "Ege",
      Population: "3000000",
    };
    const result = await client.db("world").collection("city").insertOne(city);
    if (result.acknowledged) console.log("Insertion is done successfully!");
    else console.log("An error occured");
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
};

seedDatabase();
