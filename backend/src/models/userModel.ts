import mongoose, { Model } from "mongoose";

export interface IUser {
  _id?: mongoose.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password?: string;
  image?: string;
  bio?: string;
  resetPasswordToken?: string | null;
  resetPasswordExpires?: Date | null;
  passwordChangedAt?: Date;
  loops: mongoose.Types.ObjectId[];
  chats: mongoose.Types.ObjectId[];
  friends: mongoose.Types.ObjectId[]; 
}

const userSchema = new mongoose.Schema<IUser>(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    password: { type: String },
    image: { type: String, default: "" },
    bio: { type: String, maxlength: 250 },
    resetPasswordToken: { type: String, default: null },
    resetPasswordExpires: { type: Date, default: null },
    passwordChangedAt: { type: Date },
    loops: [{ type: mongoose.Schema.Types.ObjectId, ref: "Loop" }],
    chats: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chat" }],
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], 
  },
  { timestamps: true }
);

const User = (mongoose.models?.User as Model<IUser>) || mongoose.model<IUser>("User", userSchema);
export default User;