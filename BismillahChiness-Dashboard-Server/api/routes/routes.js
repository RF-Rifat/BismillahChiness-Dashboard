const express = require("express");
const Transactions = require("../models/Transactions");
const app = express.Router();

// get all user data from database
app.get("/api/:type", async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);
    const type = req.params.type;

    let result;

    if (type.toLowerCase().trim() === "user") {
      result = await User.find()
        .skip(page * size)
        .limit(size);
    } else if (type.toLowerCase().trim() === "message") {
      result = await Message.find()
        .sort({ _id: -1 })
        .skip(page * size)
        .limit(size);
    } else if (type.toLowerCase().trim() === "blog") {
      result = await Blog.find()
        .sort({ _id: -1 })
        .skip(page * size)
        .limit(size);
    } else if (type.toLowerCase().trim() === "comment") {
      result = await Comment.find()
        .sort({ _id: -1 })
        .skip(page * size)
        .limit(size);
    } else if (type.toLowerCase().trim() === "loan") {
      result = await Loan.find()
        .sort({ _id: -1 })
        .skip(page * size)
        .limit(size);
    } else if (type.toLowerCase().trim() === "transaction") {
      result = await Transactions.find();
    }
    console.log("object", result);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.post("/api/:type", async (req, res) => {
  try {
    const type = req.params.type;
    const data = req.body;
    let result;

    if (type.toLowerCase().trim() === "user") {
      result = await User.create(data);
    } else if (type.toLowerCase().trim() === "message") {
      result = await Message.create(data);
    } else if (type.toLowerCase().trim() === "blog") {
      result = await Blog.create(data);
    } else if (type.toLowerCase().trim() === "comment") {
      result = await Comment.create(data);
    } else if (type.toLowerCase().trim() === "loan") {
      result = await Loan.create(data);
    }

    res.send(result);
    // console.log(result);
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;
