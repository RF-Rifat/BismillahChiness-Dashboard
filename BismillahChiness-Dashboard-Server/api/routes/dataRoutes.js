const express = require("express");
const router = express.Router();
const { ObjectId, MongoCryptInvalidArgumentError } = require("mongodb");
const User = require("../models/User");
const Blog = require("../models/blog");
const Comment = require("../models/comment");
const Loan = require("../models/loan");
const Testimonial = require("../models/Testimonial");
const Account = require("../models/account");
const CreditCard = require("../models/creditCard");
const { PaymentIntent, Payment } = require("../models/payment");
const Transaction = require("../models/Transaction");

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

// router.post("/user", async (req, res) => {
//   console.log(req.body);
//   try {
//     const { name, email, password, imageSrc, balance, status, address } =
//       req.body;
//     const newUser = new User({
//       name,
//       email,
//       password,
//       imageSrc,
//       balance,
//       status,
//       address,
//     });
//     await newUser.save();
//     res.status(201).json({ message: "User created successfully" });
//   } catch (error) {
//     console.error("Error creating user:", error.message);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });
// router.get("/user", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     console.error("Error fetching users:", error.message);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

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
      case "account":
        result = await Account.find()
          .sort({ _id: -1 })
          .skip(page * size)
          .limit(size);
        break;
      case "credit":
        result = await CreditCard.find()
          .sort({ _id: -1 })
          .skip(page * size)
          .limit(size);
        break;
      case "message":
        result = await Message.find()
          .sort({ _id: -1 })
          .skip(page * size)
          .limit(size);
        break;
      case "blog":
        result = await Blog.find()
          .sort({ _id: -1 })
          .skip(page * size)
          .limit(size);
        break;
      case "comment":
        result = await Comment.find()
          .sort({ _id: -1 })
          .skip(page * size)
          .limit(size);
        break;
      case "loan":
        result = await Loan.find()
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
      case "transactions":
        result = await Transaction.find()
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
router.get("/userData/:email", async (req, res) => {
  try {
    const email = req.params.email;
    let user = await User.findOne({ email: email });
    let userAcc = await Account.find({ userId: new ObjectId(user?._id) });
    let userCard = await CreditCard.find({
      userId: new ObjectId(user?._id),
    });
    let userTransaction = await Transaction.find({
      senderId: user?._id,
    });
    console.log(userTransaction);
    if (!user || !userAcc || !userCard || !userTransaction) {
      return res.status(404).json({ error: "User data not found" });
    }
    const responseData = {
      ...user.toObject(),
      accounts: userAcc,
      creditCards: userCard,
      userTransaction,
    };
    res.status(200).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route for creating payment intent
router.post("/stripe/create-payment-intent", async (req, res) => {
  const { price } = req.body;
  const amount = parseInt(price * 100);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    const newPaymentIntent = new PaymentIntent({
      clientSecret: paymentIntent.client_secret,
    });

    await newPaymentIntent.save();

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route for saving payment information
router.post("/stripe/payment", async (req, res) => {
  const { email, price, transactionId, date, status } = req.body;
  const payment = new Payment({
    email: email,
    price: price,
    transactionId: transactionId,
    date: date,
    status: status,
  });

  try {
    const savedPayment = await payment.save();

    res.send(savedPayment);
  } catch (error) {
    res.status(500).send(error);
  }
});

// PUT route
router.put("/user/update-status/:email", async (req, res) => {
  try {
    const userEmail = req.params.email;
    const newStatus = req.body.status;

    const result = await User.updateOne(
      { email: userEmail },
      { status: newStatus }
    );

    if (result.nModified === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(result);
  } catch (error) {
    console.error("Error updating user status:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

// getting data by filtering id
router.get("/blog/:id", async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.send(blog);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
