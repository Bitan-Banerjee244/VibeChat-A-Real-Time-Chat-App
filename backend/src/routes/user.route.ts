import express from "express"
import { login, logout, signup } from "../controllers/authController.js";

let userRouter = express.Router();

userRouter.post("/signin",signup);
userRouter.post("/login",login);
userRouter.post("/logout",logout);

export default userRouter;