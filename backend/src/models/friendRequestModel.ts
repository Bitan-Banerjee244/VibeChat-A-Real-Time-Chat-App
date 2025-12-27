import mongoose, { Schema, Model } from "mongoose";

export interface IFriendRequest {
  _id?: mongoose.Types.ObjectId;
  sender: mongoose.Types.ObjectId;   // The person sending the request
  receiver: mongoose.Types.ObjectId; // The person receiving the request
  status: "pending" | "accepted" | "rejected";
}

const friendRequestSchema = new Schema<IFriendRequest>(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiver: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

// 1. Indexing for performance when a user checks their notifications
friendRequestSchema.index({ receiver: 1, status: 1 });

// 2. Unique index to prevent duplicate requests between the same two people
// This prevents User A from sending 10 requests to User B
friendRequestSchema.index({ sender: 1, receiver: 1 }, { unique: true });

const FriendRequest =
  (mongoose.models?.FriendRequest as Model<IFriendRequest>) ||
  mongoose.model<IFriendRequest>("FriendRequest", friendRequestSchema);

export default FriendRequest;