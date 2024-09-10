const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema(
  {
    assigneeMail: {
      type: String, // Assignee email
      required: true,
    },  
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    important: {
      type: Boolean,
      default: false,
    },
    complete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Task = mongoose.model("task", TaskSchema);
module.exports = Task;
