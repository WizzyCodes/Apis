import { Schema, Document, model } from "mongoose";

interface iCategory {
  name: string;
  description: string;
}

interface iCategoryData extends iCategory, Document {}
const categoryModel = new Schema<iCategoryData>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);
export default model<iCategoryData>("category", categoryModel);
