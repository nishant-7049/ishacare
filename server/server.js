require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const cors = require("cors");

// Connnect DB
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));
app.use("/api/forum", require("./routes/forum"));
app.use("/api/verifyToken", require("./routes/verifyToken"));

app.use("/api/quote", require("./routes/Quote"));

//Error Handlers (Should be the last pice of middleware)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// app.use(cors())

const server = app.listen(PORT, () => {
  console.log(`Server Started at port: ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => {
    process.exit(1);
  });
});
