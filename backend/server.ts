import app from "./src/app.js";
import "dotenv/config";
import connectDB from "./src/db/db..js";

const startServer = async () => {
  let port = process.env.PORT || 5000;
  await connectDB();

  app.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
  });
};

startServer();
