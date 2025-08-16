import { Router } from "express";
import { registerUser, verifyEmailController } from "../controllers/user.controller.js";

const userRouter = Router();
userRouter.post('/register',registerUser)
userRouter.post("/verifyEmail", verifyEmailController);
export default userRouter