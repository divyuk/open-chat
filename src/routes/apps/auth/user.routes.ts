import { registerUser } from "@src/controllers/apps/auth/user.controller";
import { validateRegistration } from "@src/validators/validate";
import { Router } from "express";

const userRouter = Router();

userRouter.route("/register").post(validateRegistration, registerUser);
