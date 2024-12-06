import { Request, Response } from "express";
import lessonModel from "../model/lessonModel";

export const getLessons = async (req: Request, res: Response) => {
  try {
    const { courseID } = req.params;
    const lessons = await lessonModel.find({ courseID });
    return res.status(200).json({
      message: "Lessons found successfully",
      data: lessons,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

export const addLesson = async (req: Request, res: Response) => {
  try {
    const { courseID } = req.params;
    const { title, content } = req.body;

    const lesson = await lessonModel.create({ courseID, title, content });
    await lesson.save();

    return res.status(201).json({
      message: "Lesson created successfully",
      data: lesson,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
