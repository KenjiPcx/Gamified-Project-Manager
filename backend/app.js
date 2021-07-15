const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

// Config
const port = process.env.PORT || 5000;

// Routes
const questsRoutes = require("./quests/routes");

// Middlewares
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/quests", questsRoutes)

// Connect to DB
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, (err) => {
  if (err) {
    console.log("Error loading server");
  }
  console.log(`Listening on port ${port}`);
});
