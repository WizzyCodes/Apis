import { Request, Response } from "express";
import courseModel from "../model/courseModel";

export const createCourse = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;

    const Course = await courseModel.create({
      title,
      description,
    });
    await Course.save();
    return res.status(201).json({
      message: "Course created successfully",
      data: Course,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

export const getAllCourses = async (req: Request, res: Response) => {
  try {
    const AllCourses = await courseModel.find();
    return res.status(200).json({
      message: "all courses found",
      data: AllCourses,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
