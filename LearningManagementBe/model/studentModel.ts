import { Schema, Document, Types, model } from "mongoose";

interface iStudent {
  email: string;
  name: string;
  enrolledCourses: Array<{}>;
}

interface iStudentData extends iStudent, Document {}
const studentModel = new Schema<iStudentData>(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    enrolledCourses: [
      {
        type: Types.ObjectId,
        ref: "course",
      },
    ],
  },
  { timestamps: true }
);
export default model<iStudentData>("student", studentModel);
