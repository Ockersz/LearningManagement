const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const userroutes = require("./routes/UserRoute");
const questionroutes = require("./routes/QuestionRoute");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT | 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/api", userroutes, questionroutes);

app.listen(PORT, () => console.log(`Listening at ${PORT}`));
