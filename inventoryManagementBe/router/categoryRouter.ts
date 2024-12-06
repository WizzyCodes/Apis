import { Router } from "express";
import {
  createCategory,
  getCategories,
} from "../controller/categoryController";

const categoryRouter: any = Router();
categoryRouter.route("/create-category").post(createCategory);
categoryRouter.route("/get-categories").get(getCategories);

export default categoryRouter;
