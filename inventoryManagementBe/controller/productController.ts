import { Request, Response } from "express";
import productModel from "../model/productModel";

// Get all products
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productModel.find().populate("category", "name");
    return res.status(200).json({
      message: "Products found successfully",
      data: products,
      status: 200,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

// Create a new product
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, category, price, stock, description } = req.body;
    if (!name || !category || !price || !stock || !description) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const product = await productModel.create({
      name,
      category,
      price,
      stock,
      description,
    });
    await product.save();
    return res.status(201).json({
      message: "Product created successfully",
      data: product,
      status: 201,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

// Update stock of a product
export const updateStock = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { stock } = req.body;
    if (!stock) {
      return res.status(400).json({
        message: "Stock is required",
      });
    }
    const product = await productModel.findByIdAndUpdate(
      id,
      { stock },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    return res.status(200).json({
      message: "Stock updated successfully",
      data: product,
      status: 200,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
