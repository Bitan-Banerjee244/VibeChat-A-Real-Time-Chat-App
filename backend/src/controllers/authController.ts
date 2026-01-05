import type { Request, Response } from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const signup = async (req: Request, res: Response) => {
  try {
    let { firstName, lastName, email, password, userName, image, bio } = req.body;
    if (!firstName || !lastName || !email || !password || !userName) {
      return res.json({
        success: false,
        message: "All Fields are required",
      });
    }

    let existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({
        success: false,
        message: "The User is already exists",
      });
    }

    let hashPassword = await bcrypt.hash(password, 10);

    let user = await User.create({
      firstName,
      lastName,
      email,
      password: hashPassword,
      userName,
      image,
      bio,
    });

    return res.json({
      success: true,
      message: "User Created Successfully!",
      user: user
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Error Occurred in SignIn",
    });
  }
};



