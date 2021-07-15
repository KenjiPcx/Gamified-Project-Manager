const mongoose = require("mongoose");
const { Schema } = mongoose;

const questSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  category: { type: String, required: true },
  series: String,
  diff: { type: String, required: true },
  description: { type: String, required: true },
  clearConditions: [String],
  rewards: { gold: Number, exp: Number },
  skills: [String],
});

const Quest = mongoose.model("Quest", questSchema);

module.exports = Quest;
