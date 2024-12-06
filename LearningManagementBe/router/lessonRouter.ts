import { Router } from "express";

import { addLesson, getLessons } from "../controller/lessonController";

const lessonRouter: any = Router();
lessonRouter.route("/add-lesson/:courseID").post(addLesson);
lessonRouter.route("/get-lesson/:courseID").get(getLessons);
export default lessonRouter;
