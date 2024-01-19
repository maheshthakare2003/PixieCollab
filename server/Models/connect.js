const mongoose = require("mongoose");

const connector = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGO);
    console.log("Mongo connected Successfully");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connector;
