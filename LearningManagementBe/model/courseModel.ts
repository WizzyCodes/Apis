import { Schema, Document, model, Types } from "mongoose";

interface iCourse {
  title: string;
  description: string;
  createdAt: Date;
  studentID: {};
}

interface iCourseData extends iCourse, Document {}
const courseModel = new Schema<iCourseData>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    studentID: {
      type: Types.ObjectId,
      ref: "student",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
export default model<iCourseData>("course", courseModel);
