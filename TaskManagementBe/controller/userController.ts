import { Request, Response } from "express";
import bcrypt from "bcrypt";
import userModel from "../model/userModel";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userModel.find();
    return res.status(200).json({
      message: "Users found successfully",
      data: users,
      status: 200,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    return res.status(201).json({
      message: "User created successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      status: 201,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
