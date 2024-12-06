import { Schema, Document, model, Types } from "mongoose";

interface iProduct {
  name: string;
  description: string;
  category: {};
  stock: number;
  price: number;
}

interface iProductData extends iProduct, Document {}
const productModel = new Schema<iProductData>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    stock: {
      type: Number,
      required: true,
    },
    category: {
      type: Types.ObjectId,
      ref: "category",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
export default model<iProductData>("product", productModel);
