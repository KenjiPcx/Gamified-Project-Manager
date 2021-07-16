const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    title: { type: String, required: true },
    type: { type: String, required: true },
    term: { type: String, required: true },
    description: { type: String, required: true },
    dependencies: [String],
    skillsInvolved: [String],
    progress: Number,
    status: String,
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
