import express, { type Request, type Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  return res.json({
    message: "Hi From Vibechat",
  });
});

export default app;
