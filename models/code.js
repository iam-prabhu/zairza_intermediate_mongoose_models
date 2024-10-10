import mongoose from "mongoose";

const codeSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export const Code = mongoose.model('Code', codeSchema);

