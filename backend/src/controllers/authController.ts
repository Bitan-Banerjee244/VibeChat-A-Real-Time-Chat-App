import type { Request, Response } from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/token.js";

export const signup = async (req: Request, res: Response) => {
  try {
    let { firstName, lastName, email, password, userName, image, bio } =
      req.body;
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
      user: user,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Error Occurred in SignIn",
      error: error,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User does not exist. Please sign up.",
      });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password!);

    if (!isPasswordMatched) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password. Try again.",
      });
    }

    const token = generateToken({ id: user._id.toString() });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        userName: user.userName,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.json({
      success: true,
      message: "Logout Successful !!",
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({
      success: false,
      message: "Logout Error",
    });
  }
};
