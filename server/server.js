// Imports
const express = require("express");
const request = require("request")
const bodyParser = require("body-parser"); //for handling request body
const MongoClient = require("mongodb").MongoClient; //for mongodb
const path = require("path");


// Backend Config
const app = express();
const host = "127.0.0.1";
const port = 4000;

app.get("/api/test",(req,res) => {
    res.send(`Server is running on ${host} at ${port}`);
})

app.listen(port, host, () => {
  console.log("Server is now running on port", port);
});
