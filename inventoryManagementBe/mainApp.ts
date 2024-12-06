import { Application, Request, Response } from "express";
import categoryRouter from "./router/categoryRouter";
import productRouter from "./router/productRouter";

export const mainApp = (app: Application) => {
  try {
    app.use("/api/category", categoryRouter);
    app.use("/api/product", productRouter);
    app.get("/", (req: Request, res: Response) => {
      try {
        res.status(200).json({
          message: "Welcome to the task api",
        });
      } catch (error) {
        res.status(404).json({
          message: error,
        });
      }
    });
  } catch (error) {
    return error;
  }
};
