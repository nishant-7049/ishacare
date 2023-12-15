require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const cloudinary = require("cloudinary");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");
const Razorpay = require("razorpay");
const sendSms = require("./utils/sendSms");
const cron = require("node-cron");
const { getLatestSession } = require("./controllers/sessionController");
const Session = require("./models/session");

// Connnect DB
connectDB();

//configuring cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.instance = new Razorpay({
  key_id: process.env.RAZOR_API_KEY_ID,
  key_secret: process.env.RAZOR_API_KEY_SECRET,
});

const app = express();
app.use(cookieParser());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload({ useTempFiles: true }));

app.use("/api", require("./routes/UserRoute"));
app.use("/api/forum", require("./routes/forum"));
app.use("/api/quote", require("./routes/quote"));
app.use("/api/testi", require("./routes/testimonialRoute"));
app.use("/api/video", require("./routes/videoRoute"));
app.use("/api/faq", require("./routes/faqRoute"));
app.use("/api/blog", require("./routes/blogRoute"));
app.use("/api/exercise", require("./routes/exerciseRoute"));
app.use("/api/payment", require("./routes/paymentRoutes"));
app.use("/api/package", require("./routes/packageRoute"));
app.use("/api/booking", require("./routes/bookingRoute"));
app.use("/api/treatment", require("./routes/treatmentRoute"));
app.use("/api/session", require("./routes/sessionRoute"));

cron.schedule(
  "26 16 * * *",
  async function () {
    console.log("sending outcome messages .....");
    const sessions = await getLatestSession();
    for (let session of sessions) {
      console.log(new Date(session.latestSession).getTime());
      console.log(
        new Date(session.latestSession).getTime() +
          1 * 1000 * 60 +
          " " +
          Date.now()
      );
      if (
        new Date(session.latestSession + 1 * 1000 * 60).getTime() < Date.now()
      ) {
        console.log(session);
        const options = {
          body: "Outcome message",
          to: session.phone,
        };
        sendSms(options);
        const ses = await Session.findById(session.sessionId);
        ses.isOutcomeFormSent = true;
        await ses.save();
      }
    }
  },
  {
    timezone: "Asia/Kolkata",
  }
);

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
