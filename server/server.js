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
const cheerio = require("cheerio"); //scraping
const rateLimit = require("express-rate-limit"); // for dos rate limit

//Backend Config
const app = express();
const host = "127.0.0.1";
const public_host = "0.0.0.0";
const port = 4000;

//Env variables
dotenv.config();
//The password for mongo db is retrieved from the .env file.
const url = process.env.MONGODB_URI;

//For cross orgin requests and Enable CORS for all routes.
const cors = require("cors");
// app.use(cors()); //use this for debuging

// Allow requests only from www.fuelwatch.xyz and fuelwatch.xyz,
app.use(
  cors({
    origin: (origin, callback) => {
      if (origin === "https://www.fuelwatch.xyz" || origin === "https://fuelwatch.xyz") {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

// Custom error handler for CORS errors
app.use((err, req, res, next) => {
  if (err.message === "Not allowed by CORS") {
    res.status(403).send("CORS Error: Not allowed by CORS");
  } else {
    next(err);
  }
});

// Implement rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 10 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

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
  //Months mapping
  const monthOrder = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };

  var databaseName = "FuelWatch";
  var collectionName = "AllData";

  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    const db = client.db(databaseName);
    const collection = db.collection(collectionName);
    const result = await collection.find({}).toArray();

    result.sort((a, b) => {
      // Extract the month and year from the date
      const [monthA, yearA] = a.date.split(" ");
      const [monthB, yearB] = b.date.split(" ");
    
      // If years are different, sort by year
      if (yearA !== yearB) {
        return parseInt(yearA) - parseInt(yearB);
      }
    
      // If years are the same, sort by month
      return monthOrder[monthA] - monthOrder[monthB];
    });
    
    console.log("All data retrieved from DB.");
    client.close();
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving data from DB.");
  }
});


// Example current data object
const currentData = {
  date: "February 2023",
  super98: "3.05",
  special95: "2.93",
  ePlus91: "2.86",
  diesel: "3.38",
};

// Function to insert single entry
async function insertCurrentData(currentData) {
  const uri = process.env.MONGODB_URI;

  try {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    console.log("Connected to MongoDB");

    const databaseName = "FuelWatch";
    const collectionName = "AllData";
    
    const db = client.db(databaseName);
    const collection = db.collection(collectionName);
    
    await collection.insertOne(currentData);
    console.log("Inserted current data into collection");

    client.close();
    console.log("Connection to MongoDB closed");
  } catch (err) {
    console.error(err);
  }
}
// Call the function to insert current data
// insertCurrentData(currentData);


app.listen(port, public_host, () => {
  console.log("Server is now running on port", port);
});
