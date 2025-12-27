import mongoose, { Schema, Model } from "mongoose";

export interface IChat {
  _id?: mongoose.Types.ObjectId;
  senderId: mongoose.Types.ObjectId; 
  receiverId: mongoose.Types.ObjectId; 
  lastMessage?: mongoose.Types.ObjectId;
}

const chatSchema = new Schema<IChat>(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    lastMessage: {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
  },
  { timestamps: true }
);

chatSchema.index({ senderId: 1, receiverId: 1 }, { unique: true });

const Chat = (mongoose.models?.Chat as Model<IChat>) || mongoose.model<IChat>("Chat", chatSchema);
export default Chat;