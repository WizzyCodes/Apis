import { Application, Request, Response } from "express";
import lessonRouter from "./router/lessonRouter";
import courseRouter from "./router/courseRouter";
import studentRouter from "./router/studentRouter";

export const mainApp = (app: Application) => {
  try {
    app.use("/api/lesson", lessonRouter);
    app.use("/api/course", courseRouter);
    app.use("/api/student", studentRouter);
    app.get("/", (req: Request, res: Response) => {
      try {
        res.status(200).json({
          message: "Welcome to the lmsb api",
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
