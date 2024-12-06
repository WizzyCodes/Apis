import { Router } from "express";

import {
  createProduct,
  getProducts,
  updateStock,
} from "../controller/productController";

const productRouter: any = Router();
productRouter.route("/create-product").post(createProduct);
productRouter.route("/get-products").get(getProducts);
productRouter.route("/update-stock/:id/stock").patch(updateStock);
export default productRouter;
