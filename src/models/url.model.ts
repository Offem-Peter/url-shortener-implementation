import mongoose, { Document } from "mongoose";
import { customAlphabet } from "nanoid";
import { number } from "yup/lib/locale";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 6);

export interface URL extends Document {
  shortUrl: string;
  originalUrl: string;
  noOfVisit: number;
}

const schema = new mongoose.Schema({
  shortUrl: {
    type: String,
    unique: true,
    required: true,
    default: () => nanoid(),
  },
  originalUrl: { type: String, required: true },
  noOfVisit: {type: number, required:true, default: 0}
});

const urlModel = mongoose.model<URL>("urlModel", schema);

export default urlModel;