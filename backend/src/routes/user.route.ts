import express from "express"
import { signup } from "../controllers/authController.js";

let userRouter = express.Router();

userRouter.post("/signin",signup);

export default userRouter;