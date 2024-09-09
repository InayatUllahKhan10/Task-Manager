const mongoose = require("mongoose");
const { Schema } = mongoose;
const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    date:{
      type: Date,
      required: true,
      default: new Date()
    },
    desc: {
      type: String,
      required: true
    },
    important: {
      type: Boolean,
      default: false,
    },
    // activities: [
    //   {
    //     type: {
    //       type: String,
    //       default: "assigned",
    //       enum: [
    //         "assigned",
    //         "started",
    //         "in progress",
    //         "bug",
    //         "completed",
    //         "commented",
    //       ],
    //     },
    //     activity: String,
    //     date: { type: Date, default: new Date() },
    //     by: { type: Schema.Types.ObjectId, ref: "User" },
    //   },
    // ],
    complete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("task", TaskSchema);
