import { Request, Response } from "express";
import studentModel from "../model/studentModel";

export const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await studentModel.find();
    return res.status(200).json({
      message: "Students found successfully",
      data: students,
      status: 200,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const enrollStudent = async (req: Request, res: Response) => {
  try {
    const { studentID, courseID } = req.body;

    const student = await studentModel.findById(studentID);

    if (student && !student.enrolledCourses.includes(courseID)) {
      student.enrolledCourses.push(courseID);
      await student.save();

      return res.status(200).json({
        message: "Student enrolled successfully",
        data: student,
        status: 200,
      });
    } else {
      return res.status(400).json({
        message: "Error enrolling student",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
