const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

process.on("uncaughtException", (err) => {
  console.log(err);
  console.log(err.name, err.message);
  console.log("Uncaught Excception 🔥🔥 Shutting down");
  process.exit(1);
});

dotenv.config({ path: `${__dirname}/../config.env` });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB).then(() => console.log("DB connection established"));

dotenv.config({ path: path.resolve(__dirname, "../.env") });
app.use(cors());

const port = process.env.PORT || 5501;
const server = app.listen(port, () => {
  console.log("Server Listening on port 5500");
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled rejection 🔥🔥 Shutting down");
  server.close(() => {
    process.exit(1);
  });
});
