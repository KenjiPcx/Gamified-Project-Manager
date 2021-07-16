const express = require("express");
const router = express.Router("/quest");
const {
  createQuest,
  getAllQuests,
  getQuestById,
  updateQuest,
  deleteQuestById,
  createQuests,
} = require("./controllers");

// Get All
router.get("/", getAllQuests);

// Create
router.post("/", createQuest);

// Get Specific
router.get("/:id", getQuestById);

// Update
router.patch("/:id", updateQuest);

// Delete
router.delete("/:id", deleteQuestById);

// Create Batch
router.post("/createQuests", createQuests);

module.exports = router;
