import { Request, Response } from "express";

import taskModel from "../model/taskModel";

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await taskModel.find().populate("assignedTo", "name email");
    return res.status(200).json({
      message: "Tasks found successfully",
      data: tasks,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, assignedTo, dueDate } = req.body;
    const task = await taskModel.create({
      title,
      description,
      assignedTo,
      dueDate,
    });
    await task.save();
    return res.status(201).json({
      message: "Task created successfully",
      data: task,
      status: 201,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

export const updateTaskStatus = async (req: Request, res: Response) => {
  try {
    const { taskID } = req.params;
    const { status } = req.body;
    const task = await taskModel.findByIdAndUpdate(
      taskID,
      { status },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }
    return res.status(200).json({
      message: "Task updated successfully",
      data: task,
      status: 200,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
