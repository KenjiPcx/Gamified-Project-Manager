const express = require("express")
const router = express.Router("/projects")
const {
    createProject,
    createProjects,
    getAllProjects,
    getProjectById,
    updateProjectById,
    deleteProjectById
} = require("./controllers")

// Get All
router.get("/", getAllProjects);

// Create
router.post("/", createProject);

// Get Specific
router.get("/:id", getProjectById);

// Update
router.patch("/:id", updateProjectById);

// Delete
router.delete("/:id", deleteProjectById);

// Create Batch
router.post("/createProjects", createProjects);

module.exports = router;