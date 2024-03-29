const mongoose = require("mongoose");
require("dotenv").config();

// Function to generate MongoDB connection URI
const getConnectionString = () => {
  let connectionUrl;
  connectionUrl = process.env.MONGO_URI;
  connectionUrl = connectionUrl.replace("<password>", process.env.DB_PASS);
  return connectionUrl;
};

// Function to connect to the MongoDB database
const connectDB = async () => {
  console.log("Connecting to the database...");
  const mongoURI = getConnectionString();

  try {
    await mongoose.connect(mongoURI, { dbName: process.env.DB_NAME });
    console.log("Successfully connected to the database!");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

module.exports = connectDB;
