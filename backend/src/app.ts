import express, { type Request, type Response } from "express";
import userRouter from "./routes/user.route.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}))

// routes
app.use("/api/v2", userRouter);

app.get("/", (req: Request, res: Response) => {
  return res.json({
    message: "Hi From Vibechat",
  });
});

export default app;
