const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Testimonial = require("../models/Testimonial");
const Transaction = require("../models/Transaction");
const Food = require("../models/foods");
const Category = require("../models/category");
const Order = require("../models/order");

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
      case "category":
        result = await Category.find()
          .skip(page * size)
          .limit(size);
        break;
      case "food":
        result = await Food.find()
          .sort({ _id: -1 })
          .skip(page * size)
          .limit(size);
        break;
      case "order":
        result = await Order.find()
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
      case "category":
        result = await Category.create(data);
        break;
      case "user":
        result = await User.create(data);
        break;
      case "testimonial":
        result = await Testimonial.create(data);
        break;
      case "order":
        result = await Order.create(data);
        break;
      case "transaction":
        result = await Transaction.create(data);
        break;
      case "food":
        result = await Food.create(data);
        break;
      default:
        result = null;
    }
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// put method
router.put("/:type/:id", async (req, res) => {
  try {
    const type = req.params.type.toLowerCase().trim();
    const id = req.params.id;

    let result;
    let updateData = req.body;
    switch (type) {
      case "user":
        result = await User.findByIdAndUpdate(id, updateData, { new: true });
        break;
      case "food":
        result = await Food.findByIdAndUpdate(id, updateData, { new: true });
        break;
      case "testimonial":
        result = await Testimonial.findByIdAndUpdate(id, updateData, {
          new: true,
        });
        break;
      default:
        return res.status(400).send("Invalid resource type");
    }

    if (!result) {
      return res.status(404).send("Resource not found");
    }

    res.send("Resource updated successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

// delete method
router.delete("/:type/:id", async (req, res) => {
  try {
    const type = req.params.type.toLowerCase().trim();
    const id = req.params.id;

    let result;
    switch (type) {
      case "user":
        result = await User.findByIdAndDelete(id);
        break;
      case "category":
        result = await Category.findByIdAndDelete(id);
        break;
      case "food":
        result = await Food.findByIdAndDelete(id);
        break;
      case "order":
        result = await Order.findByIdAndDelete(id);
        break;
      case "testimonial":
        result = await Testimonial.findByIdAndDelete(id);
        break;
      default:
        return res.status(400).send("Invalid resource type");
    }

    if (!result) {
      return res.status(404).send("Resource not found");
    }

    res.send("Resource deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

// getting data by filtering id
router.get("/food/:id", async (req, res) => {
  try {
    const foodId = req.params.id;
    console.log(foodId);
    const food = await Food.findById(foodId);
    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }
    res.send(food);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
