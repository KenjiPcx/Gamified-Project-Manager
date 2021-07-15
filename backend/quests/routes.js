const express = require("express");
const Quest = require("./models");
const router = express.Router("/quest");

// Get All
router.get("/", async (req, res) => {
  try {
    const quests = await Quest.find();
    res.status(200).json(quests);
  } catch (err) {
    res.status(400).json({ err: "Failed to get all quest" });
  }
});

// Create
router.post("/", async (req, res) => {
  try {
    const quest = new Quest({
      name: req.body.name,
      type: req.body.type,
      category: req.body.category,
      series: req.body.series,
      diff: req.body.diff,
      description: req.body.description,
      clearConditions: req.body.clearConditions,
      rewards: req.body.rewards,
      skills: req.body.skills,
    });
    await quest.save();
    res.status(201).json(quest);
  } catch {
    res.status(400).json({ err: "Failed to create quest" });
  }
});

// Get Specific
router.get("/:id", async (req, res) => {
  try {
    const quest = await Quest.findById(req.params.id);
    res.status(200).json(quest);
  } catch (err) {
    res.status(400).json({ err: "Quest does not exist" });
  }
});

// Update
router.patch("/:id", async (req, res) => {
  try {
    const updatedPost = await Quest.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name: req.body.name,
          type: req.body.type,
          category: req.body.category,
          series: req.body.series,
          diff: req.body.diff,
          description: req.body.description,
          clearConditions: req.body.clearConditions,
          rewards: req.body.rewards,
          skills: req.body.skills,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(400).json({ err: "Failed to update quest" });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const removedQuest = await Quest.findByIdAndRemove(req.params.id);
    res.status(200).json(removedQuest);
  } catch (err) {
    res.status(400).json({ err: "Failed to delete quest" });
  }
});

module.exports = router;
