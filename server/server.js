//Imports
const express = require("express");
const request = require("request");
const bodyParser = require("body-parser"); //for handling request body
const MongoClient = require("mongodb").MongoClient; //for mongodb
const { MongoClient, ServerApiVersion } = require("mongodb"); //for mongodb
const path = require("path");
const dotenv = require("dotenv");
const { error } = require("console");

//Backend Config
const app = express();
const host = "127.0.0.1";
const port = 4000;

//Env variables
dotenv.config();
//The password for mongo db is retrieved from the .env file.
const url = process.env.MONGODB_URI;

//For cross orgin requests and Enable CORS for all routes.
const cors = require("cors");
app.use(cors());

// Functions

let testDbConnection = () => {
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
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
}


app.get("/api/test", (req, res) => {
  res.send(`Server is running on ${host} at ${port}`);
});

app.get("/api/mongo-test", (req, res) => {
    testDbConnection();
  res.send("Successfully connected to MongoDB");
});

app.listen(port, host, () => {
  console.log("Server is now running on port", port);
});
