const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  job: String,
  title: String,
  level: { type: Object, level: String, exp: Number },
  stats: {
    type: Object,
    strength: String,
    health: String,
    stamina: String,
    agility: String,
    intelligence: String,
  },
  statistics: {
    type: Object,
    dayStreaks: Number,
    projectsCompleted: Number,
    questsCompleted: Number,
  },
  wallet: { type: Object, gold: Number },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
