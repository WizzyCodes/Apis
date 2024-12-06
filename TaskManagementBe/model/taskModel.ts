import { Schema, Document, model, Types } from "mongoose";

interface iTask {
  title: string;
  description: string;
  createdAt: Date;
  assignedTo: {};
  status: {};
  dueDate: Date;
}

interface iTaskData extends iTask, Document {}
const taskModel = new Schema<iTaskData>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "in progress", "completed"],
      default: "pending",
    },
    assignedTo: {
      type: Types.ObjectId,
      ref: "user",
    },
    dueDate: {
      type: Date,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
export default model<iTaskData>("task", taskModel);
