import { Router } from "express";

import {
  createTask,
  getTasks,
  updateTaskStatus,
} from "../controller/taskController";

const taskRouter: any = Router();
taskRouter.route("/create-task").post(createTask);
taskRouter.route("/get-tasks").get(getTasks);
taskRouter.route("/update-task-status/:taskID/status").patch(updateTaskStatus);
export default taskRouter;
