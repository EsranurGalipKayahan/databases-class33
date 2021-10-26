const MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://admin:12345@cluster0.oundx.mongodb.net";

const findTheCity = async () => {
  const client = new MongoClient(url);
  try {
    await client.connect();
    let result = await client
      .db("world")
      .collection("city")
      .find({ Name: "Izmir" })
      .toArray();
    console.table(result);
    result = await client
      .db("world")
      .collection("city")
      .find({ CountryCode: "TUR" })
      .toArray();
    console.log(
      "####################################################################################"
    );
    console.table(result);
    //In this example, my city is already in the database, so I need to put extra filter to find newly inserted city
    result = await client
      .db("world")
      .collection("city")
      .findOne({ CountryCode: "TUR", ID: "TRY1001" });
    console.log(
      "####################################################################################"
    );
    if (result) console.table(result);
    else console.log("The city is not found!");
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
};

findTheCity();
