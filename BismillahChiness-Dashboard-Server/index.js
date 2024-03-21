// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const connectDB = require("./api/db/connectDB.js");
// const dataRoutes = require("./api/routes/dataRoutes.js");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Use routes
// app.use("/api", dataRoutes);

// const port = process.env.PORT || 5000;

// const server = async () => {
//   await connectDB();

//   app.get("/", (req, res) => {
//     res.send(`Server Running on port ${port}`);
//   });

//   app.listen(port, () => {
//     console.log("Server Running on port", port);
//   });
// };

// server();





const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const { createServer } = require("http");
const connectDB = require("./api/db/connectDB.js");
const dataRoutes = require("./api/routes/dataRoutes.js");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Use routes

const port = process.env.PORT || 5000;

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:5173", "https://savings-34498.web.app"],
    methods: ["GET", "POST","PUT","DELETE"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("User Id", socket.id);

  socket.on("sendMessage", (data) => {
    io.emit("message", {
      senderId: socket.id,
      message: data.message,
    });
  });
});

app.use("/api", dataRoutes);
const startServer = async () => {
  await connectDB();

  app.get("/", (req, res) => {
    res.send(`Server Running on port ${port}`);
  });

  httpServer.listen(port, () => {
    console.log("Server Running on port", port);
  });
};

startServer();
