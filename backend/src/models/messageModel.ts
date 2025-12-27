import mongoose, { Schema, Model } from "mongoose";

export interface IMessage {
  _id?: mongoose.Types.ObjectId;
  sender: mongoose.Types.ObjectId;   // Individual message sender
  receiver: mongoose.Types.ObjectId; // Individual message receiver
  content: string;
  messageType: "text" | "image" | "video";
  isRead: boolean;
}

const messageSchema = new Schema<IMessage>(
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
    content: {
      type: String,
      required: true,
    },
    messageType: {
      type: String,
      enum: ["text", "image", "video"],
      default: "text",
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Message = (mongoose.models?.Message as Model<IMessage>) || mongoose.model<IMessage>("Message", messageSchema);
export default Message;