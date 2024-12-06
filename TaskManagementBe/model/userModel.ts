import { Schema, Document, Types, model } from "mongoose";

interface iUser {
  email: string;
  name: string;
  password: string;
  task: {};
}

interface iUserData extends iUser, Document {}
const userModel = new Schema<iUserData>(
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
    password: {
      type: String,
    },
    task: {
      type: Types.ObjectId,
      ref: "task",
    },
  },
  { timestamps: true }
);
export default model<iUserData>("user", userModel);
