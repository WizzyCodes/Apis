import { Router } from "express";

import { createUser, getUsers } from "../controller/userController";

const userRouter: any = Router();
userRouter.route("/create-user").post(createUser);
userRouter.route("/get-users").get(getUsers);

export default userRouter;
