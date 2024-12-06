import { Router } from "express";

import { enrollStudent, getStudents } from "../controller/studentController";

const studentRouter: any = Router();
studentRouter.route("/get-students").get(getStudents);
studentRouter.route("/enroll").post(enrollStudent);
export default studentRouter;
