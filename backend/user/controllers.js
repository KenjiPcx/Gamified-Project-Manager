const User = require("./models");

const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ err: "No such user" });
  }
};

const getMainUser = async (req, res) => {
  try {
    const user = await User.findOne({ userName: "Kenji Phang" });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ err: "Failed to find user" });
  }
};

const createUser = async (req, res) => {
  try {
    const user = User({
      userName: req.body.name,
      job: req.body.job,
      title: req.body.title,
      level: req.body.level,
      exp: req.body.exp,
      stats: req.body.stats,
      statistics: req.body.statistics,
    });
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ err: "Failed to create user" });
  }
};

const updateGold = async (req, res) => {
  try {
    const user = await User.updateOne(
      { userName: "Kenji Phang" },
      {
        $set: {
          wallet: req.body.wallet,
        },
      }
    );
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ err: "Failed to update gold" });
  }
};

module.exports = { getUser, createUser, getMainUser, updateGold };
