import mongoose from "mongoose";

interface ILoop {
  _id?: mongoose.Types.ObjectId;
  owner: mongoose.Types.ObjectId;
  mediaUrl: string;
  mediaType: "image" | "video";
  views: mongoose.Types.ObjectId[];
  liked: mongoose.Types.ObjectId[];
  expiresAt: Date;
}

const loopSchema = new mongoose.Schema<ILoop>(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    mediaUrl: {
      type: String,
      required: true,
    },
    mediaType: {
      type: String,
      enum: ["image", "video"],
      default: "image",
    },
    views: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    liked: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    expiresAt: {
      type: Date,
      required: true,
      default: () => new Date(Date.now() + 24 * 60 * 60 * 1000),
      index: { expires: 0 }, 
    },
  },
  { timestamps: true }
);

const Loop = mongoose.models?.Loop || mongoose.model<ILoop>("Loop", loopSchema);
export default Loop;
