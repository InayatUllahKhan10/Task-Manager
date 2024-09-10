const express = require("express");
const Task = require("../Models/task"); // Import the Task model
const router = express.Router();

// Connect to MongoDB
// Middleware // Parse incoming JSON requests

// Routes (APIs)

// 1. Fetch All Tasks
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2. Fetch Important Tasks
router.get("/tasks/important", async (req, res) => {
  try {
    const importantTasks = await Task.find({ important: true });
    res.json(importantTasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 3. Fetch Incomplete Tasks
router.get("/tasks/incomplete", async (req, res) => {
  try {
    const incompleteTasks = await Task.find({ complete: false });
    res.json(incompleteTasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 4. Fetch Complete Tasks
router.get("/tasks/complete", async (req, res) => {
  try {
    const completeTasks = await Task.find({ complete: true });
    res.json(completeTasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 5. Save a New Task
router.post("/tasks", async (req, res) => {
  const { assigneeMail, title, desc, important, complete } = req.body;

  // Input validation
  if (!assigneeMail || !title || !desc) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newTask = new Task({
    assigneeMail,
    title,
    desc,
    important: important || false, // default false if not provided
    complete: complete || false,   // default false if not provided
  });

  try {
    const savedTask = await newTask.save();
    res.status(201).json(savedTask); // Return the saved task with a 201 status
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router