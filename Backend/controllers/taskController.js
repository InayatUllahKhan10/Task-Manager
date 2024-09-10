const Task=require('../Models/task')
const User=require('../Models/user')

const addTask = async (req, res) => {
    try {
      const { assigneeName, assigneeMail, title, desc } = req.body;
  
      // Validate inputs
      if (!assigneeName || !assigneeMail || !title || !desc) {
        return res.status(400).json({ message: "All fields are required." });
      }

      // Create a new task
        const newTask = new Task({assigneeName,assigneeMail,title,desc});


       // Save the task to the database
        const savedTask = await newTask.save();
        return res.status(201).json({ message: "Task added successfully",task: savedTask});
        } catch (error) {
            return res.status(500).json({ message: "Failed to add task", error });
        }
    };

    // Controller to get all tasks (if needed)
    const getTasks = async (req, res) => {
        try {
        const tasks = await Task.find();
        return res.status(200).json(tasks);
        } catch (error) {
        return res.status(500).json({ message: "Failed to fetch tasks", error });
        }
    };

    // Controller to get a single task by ID (if needed)
    const getTaskById = async (req, res) => {
        try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        return res.status(200).json(task);
        } catch (error) {
        return res.status(500).json({ message: "Failed to fetch task", error });
        }
    };

    // Controller to update a task
const updateTask = async (req, res) => {
    try {
      const { assigneeName, assigneeMail, title, desc} = req.body;
      
      // Update task details
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        { assigneeName, assigneeMail, title, desc },
        { new: true } // To return the updated task
      );
  
      if (!updatedTask) {
        return res.status(404).json({ message: "Task not found" });
      }
      
      return res.status(200).json({ message: "Task updated successfully", task: updatedTask });
    } catch (error) {
      return res.status(500).json({ message: "Failed to update task", error });
    }
  };
  
  // Controller to delete a task
  const deleteTask = async (req, res) => {
    try {
      const deletedTask = await Task.findByIdAndDelete(req.params.id);
      if (!deletedTask) {
        return res.status(404).json({ message: "Task not found" });
      }
      return res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Failed to delete task", error });
    }
  };
  
  module.exports = {
    addTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask,
  };


