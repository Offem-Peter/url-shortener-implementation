import mongoose, { Document } from "mongoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 6);

export interface URL extends Document {
  shortUrl: string;
  originalUrl: string;
}

const schema = new mongoose.Schema({
  shortUrl: {
    type: String,
    unique: true,
    required: true,
    default: () => nanoid(),
  },
  originalUrl: { type: String, required: true },
});

const urlModel = mongoose.model<URL>("urlModel", schema);

export default urlModel;