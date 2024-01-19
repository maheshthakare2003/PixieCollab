const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const trial = require("./Models/trialUser.js");
const connector = require("./Models/connect.js");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
app.use(cors());
connector();

app.get("/", (req, res) => {
  const newTrial = new trial({ name: "2" });
  const t = async () => {
    try {
      await newTrial.save();
      console.log("Saved")
    } catch (err) {
      console.log(err);
    }
  };
  t();
  res.status(200).json({ message: "Let's start!" });
});

app.listen(5500, () => {
  console.log("Server Listening on port 5500");
});
