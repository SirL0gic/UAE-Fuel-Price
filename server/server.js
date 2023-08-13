//Imports
const express = require("express");
const request = require("request");
const bodyParser = require("body-parser"); //for handling request body
const MongoClient = require("mongodb").MongoClient; //for mongodb
const { ServerApiVersion } = require("mongodb"); //for mongodb
const path = require("path");
const dotenv = require("dotenv");
const { error } = require("console");
const axios = require("axios");
const cheerio = require("cheerio");

//Backend Config
const app = express();
const host = "127.0.0.1";
const public_host = "0.0.0.0"
const port = 4000;

//Env variables
dotenv.config();
//The password for mongo db is retrieved from the .env file.
const url = process.env.MONGODB_URI;

//For cross orgin requests and Enable CORS for all routes.
const cors = require("cors");
app.use(cors());

app.get("/api/test", (req, res) => {
  res.send(`Server is running on ${host} at ${port}`);
});

app.get("/api/mongo-test", (req, res) => {
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(url, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 2 });
      console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
      );
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

  res.send("Check console");
});

app.get("/api/all-fuel-data", async (req, res) => {
  var databaseName = "FuelWatch";
  var collectionName = "AllData";

  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    const db = client.db(databaseName);
    const collection = db.collection(collectionName);
    const result = await collection.find({}).toArray();
    console.log("All data retrieved from DB.");
    client.close();
    res.send(result);
    // console.log(result)
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving data from DB.");
  }
});


app.listen(port,public_host, () => {
  console.log("Server is now running on port", port);
});
