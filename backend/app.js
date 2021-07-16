const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

// Config
const port = process.env.PORT || 5000;

// Routes
const questRoutes = require("./quests/routes");
const projectRoutes = require("./projects/routes");

// Middlewares
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/quests", questRoutes);
app.use("/projects", projectRoutes);

// Connect to DB
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
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
