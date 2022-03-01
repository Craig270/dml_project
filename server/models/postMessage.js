import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  goingCount: {
    type: Number,
    default: 1,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);
//Exporting mongoose model from post message file. On this file is what allows run commands such create, delete, update..maaybe find.
export default PostMessage;
