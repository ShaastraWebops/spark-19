const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const Participant = require("./models/Participants");
const handle = app.getRequestHandler();
const cors = require("cors");

mongoose.connect("mongodb://localhost:27017/Spark-19", {
  useNewUrlParser: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected");
});

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  server.use(cors());
  server.use(bodyParser.urlencoded({ extended: true }));

  server.get("/", (req, res) => {
    return app.render(req, res, "/", req.query);
  });

  server.post("/", (req, res) => {
    const participant = new Participant(req.body);
    participant
      .save()
      .then(participant => {
        res.status(200).json({ participant: "successfully submitted" });
        res.redirect("/");
      })
      .catch(err => {
        res.status(400).send("failed");
        console.log(err);
      });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Server Ready on Port ${port}`);
  });
});
