const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Testimonial = require("../models/Testimonial");
const Transaction = require("../models/Transaction");
const Food = require("../models/foods");

router.post("/", async (req, res) => {
  try {
    const newData = req.body;
    const result = await Data.create(newData);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error creating data:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/:type", async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);
    const type = req.params.type.toLowerCase().trim();

    let result;
    switch (type) {
      case "user":
        result = await User.find()
          .sort({ _id: -1 })
          .skip(page * size)
          .limit(size);
        break;
      case "food":
        result = await Food.find()
          .sort({ _id: -1 })
          .skip(page * size)
          .limit(size);
        break;
      case "testimonial":
        result = await Testimonial.find()
          .sort({ _id: -1 })
          .skip(page * size)
          .limit(size);
        break;
      default:
        result = "unrecognized path";
    }

    res.send(result);
    console.log(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.post("/:type", async (req, res) => {
  try {
    const type = req.params.type.toLowerCase().trim();
    const data = req.body;
    let result;
    switch (type) {
      case "user":
        result = await User.create(data);
        break;
      case "account": {
        const userId = data.userId;
        const accType = data.accountType;
        const accounts = await Account.find({ userId });
        const filterAcc = accounts.filter(
          (item) => item.accountType === accType
        );
        if (filterAcc.length > 0) {
          return res
            .status(405)
            .send(`Your can only create one ${accType} account`);
        }
        result = await Account.create(data);
        break;
      }
      case "credit": {
        const userId = data.userId;
        const cardType = data.cardType;
        const cards = await CreditCard.find({ userId });
        const filterCard = cards.filter((item) => item.cardType === cardType);
        console.log(filterCard.length, cardType, userId);
        if (filterCard.length > 0) {
          return res
            .status(405)
            .send(`Your can only create one ${cardType} account`);
        }
        result = await CreditCard.create(data);
        break;
      }
      case "message":
        result = await Message.create(data);
        break;
      case "blog":
        result = await Blog.create(data);
        break;
      case "comment":
        result = await Comment.create(data);
        break;
      case "loan":
        result = await Loan.create(data);
        break;
      case "testimonial":
        result = await Testimonial.create(data);
        break;
      case "transaction":
        result = await Transaction.create(data);
        break;
      default:
        result = null;
    }

    res.send(result);
    console.log(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// getting data by filtering id
router.get("/food/:id", async (req, res) => {
  try {
    const foodId = req.params.id;
    const food = await Food.findById(foodId);
    if (!food) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.send(food);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
