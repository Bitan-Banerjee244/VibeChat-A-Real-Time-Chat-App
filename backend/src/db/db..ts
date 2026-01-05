import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("DataBase Connected Successfully");
  } catch (error) {
    console.log("Database connection Error");
  }
};

export default connectDB;