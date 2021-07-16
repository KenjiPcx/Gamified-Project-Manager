const Project = require("./models");

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(400).json({ err: "Failed to get projects" });
  }
};

const createProject = async (req, res) => {
  try {
    const project = Project({
      title: req.body.title,
      term: req.body.term,
      type: req.body.type,
      description: req.body.description,
      dependencies: req.body.dependencies,
      skillsInvolved: req.body.skillsInvolved,
      progress: req.body.progress,
    });
    await project.save();
    res.status(200).json(project);
  } catch (err) {
    res.status(400).json({ err: "Failed to get projects" });
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.status(200).json(project);
  } catch (err) {
    res.status(400).json({ err: "No Project with this id" });
  }
};

const updateProjectById = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title: req.body.title,
          term: req.body.term,
          type: req.body.type,
          description: req.body.description,
          description: req.body.description,
          dependencies: req.body.dependencies,
          progress: req.body.progress,
          skills: req.body.skills,
        },
      },
      { new: true }
    );
    res.status(200).json(project);
  } catch (err) {
    res.status(400).json({ err: "Failed to update project" });
  }
};

const deleteProjectById = async (req, res) => {
  try {
    const removedProject = await Project.findByIdAndRemove(req.params.id);
    res.status(200).json(removedProject);
  } catch (err) {
    res.status(400).json({ err: "Failed to delete project" });
  }
};

const createProjects = async (req, res) => {
  try {
    const projectsData = req.body.projectsData;
      const totalProjects = projectsData.length;
      let successCtr = 0;
    await projectsData.forEach(async (projectData) => {
      try {
        const project = Project({
          title: projectData.title,
          term: projectData.term,
          type: projectData.type,
          description: projectData.description,
          dependencies: projectData.dependencies,
          skillsInvolved: projectData.skillsInvolved,
          progress: projectData.progress,
        });
          await project.save();
          successCtr += 1;
          console.log(`${successCtr}/${totalProjects}`);
      } catch (err) {
        console.log("Failed to upload project data", successCtr);
      }
    });
    res.json({ message: `Data Upload Success` });
  } catch (error) {
    res.json({ message: "Data Upload Failed" });
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
  updateProjectById,
  deleteProjectById,
  createProject,
  createProjects,
};
