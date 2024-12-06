import { Request, Response } from "express";
import categoryModel from "../model/categoryModel";

// Get all categories
export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await categoryModel.find();
    return res.status(200).json({
      message: "Categories found successfully",
      data: categories,
      status: 200,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

// Create a new category
export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({
        message: "Name and description are required",
      });
    }
    const category = await categoryModel.create({ name, description });
    await category.save();
    return res.status(201).json({
      message: "Category created successfully",
      data: category,
      status: 201,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
