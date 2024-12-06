import { Application, Request, Response } from "express";
import taskRouter from "./router/taskRouter";
import userRouter from "./router/userRouter";

export const mainApp = (app: Application) => {
  try {
    app.use("/api/task", taskRouter);
    app.use("/api/user", userRouter);
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
