import { Router } from "express";

import { createCourse, getAllCourses } from "../controller/courseController";

const courseRouter: any = Router();
courseRouter.route("/create-course").post(createCourse);
courseRouter.route("/get-all-course").get(getAllCourses);
export default courseRouter;
