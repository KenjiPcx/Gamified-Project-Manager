const Quest = require("./models");

const getAllQuests = async (req, res) => {
  try {
    const quests = await Quest.find();
    res.status(200).json(quests);
  } catch (err) {
    res.status(400).json({ err: "Failed to get all quest" });
  }
};

const createQuest = async (req, res) => {
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
      status: req.body.status
    });
    await quest.save();
    res.status(201).json(quest);
  } catch {
    res.status(400).json({ err: "Failed to create quest" });
  }
};

const getQuestById = async (req, res) => {
  try {
    const quest = await Quest.findById(req.params.id);
    res.status(200).json(quest);
  } catch (err) {
    res.status(400).json({ err: "Quest does not exist" });
  }
};

const updateQuest = async (req, res) => {
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
          status: req.body.status
        },
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(400).json({ err: "Failed to update quest" });
  }
};

const deleteQuestById = async (req, res) => {
  try {
    const removedQuest = await Quest.findByIdAndRemove(req.params.id);
    res.status(200).json(removedQuest);
  } catch (err) {
    res.status(400).json({ err: "Failed to delete quest" });
  }
};

const createQuests = async (req, res) => {
  try {
    const questsData = req.body.questsData;
    await questsData.forEach(async (questData) => {
      try {
        const quest = new Quest({
          name: questData.name,
          type: questData.type,
          category: questData.category,
          series: questData.series,
          diff: questData.diff,
          description: questData.description,
          clearConditions: questData.clearConditions,
          rewards: questData.rewards,
          skills: questData.skills,
        });
        await quest.save();
      } catch (err) {
        console.log("Failed to upload quest data");
      }
    });
    res.json({ message: "Data Upload Success" });
  } catch (error) {
    res.json({ message: "Data Upload Failed" });
  }
};

module.exports = {
  createQuest,
  getAllQuests,
  getQuestById,
  updateQuest,
  deleteQuestById,
  createQuests,
};
