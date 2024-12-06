import { Schema, Document, model, Types } from "mongoose";

interface iLesson {
  title: string;
  content: string;
  createdAt: Date;
  courseID: {};
}

interface iLessonData extends iLesson, Document {}
const lessonModel = new Schema<iLessonData>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    courseID: {
      type: Types.ObjectId,
      ref: "course",
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
export default model<iLessonData>("lesson", lessonModel);
