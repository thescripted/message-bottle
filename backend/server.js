import express from "express";
import logger from "morgan";
import mongoose from "mongoose";
import Message from "./models/Message";
import bodyParser from "body-parser";

const uri =
  "mongodb+srv://benjamin_kinga:AHqv0Bi88fqCUjNi@message-in-a-bottle-njf8i.gcp.mongodb.net/bottle?retryWrites=true&w=majority";

// Initializing connection to database
mongoose.connect(uri, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: ")); // Logging error

//Setting up Router
const app = express();
const router = express.Router();

// Adding required middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use("/api", router);

//Initialize the API
router.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

router.post("/message", (req, res) => {
  const message = new Message();
  console.log(req.body);
  const body = req.body;
  if (!body) {
    return res.json({
      success: false,
      error: "You must provide some text...",
    });
  }
  message.body = body["message"];
  message.date = Date.now().toString();
  message.save((err) => {
    if (err) return res.json({ success: false, error: err });
    console.log(`Successful. We saved "${body["message"]}"`);
    return res.json({ success: true });
  });
});

router.get("/request", (req, res) => {
  Message.estimatedDocumentCount().exec((err, count) => {
    const random = Math.floor(Math.random() * count);

    Message.findOne()
      .skip(random)
      .exec((err, result) => {
        console.log(result);
        return res.json({ message: result.body, time: result.date });
      });
  });
});

app.listen(3001, () => console.log(`Listening on port 3001`));
