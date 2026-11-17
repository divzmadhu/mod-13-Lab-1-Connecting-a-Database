
//Configure our environment variable at the top 
import 'dotenv/config' ;
import express from "express";

import {MongoClient } from 'mongodb';
const app = express();

const port =3000;

app.get("/",(req,res)=>{
    res.send("Server is up and running!");
})

app.listen(port,() => console.log(`Server running on port: ${port}`));

// const { MongoClient } = require('mongodb');  // we are not using this syntax
 

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
 
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
 
run().catch(console.dir);