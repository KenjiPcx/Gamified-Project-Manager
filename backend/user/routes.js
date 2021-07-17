const express = require("express");
const {
  getUser,
  createUser,
  getMainUser,
  updateGold,
} = require("./controllers");
const router = express.Router();

router.get("/", getMainUser);

router.post("/", createUser);

router.patch("/updateGold", updateGold);

module.exports = router;
