import app from "./src/app.js";
import "dotenv/config";

const startServer = () => {
  let port = process.env.PORT || 5000;

  app.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
  });
};

startServer();
