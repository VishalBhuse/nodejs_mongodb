const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "vishals1",
    },
  },
  {
    versionKey: false,
  }
);

const Blog = mongoose.model("blogs1", blogSchema);

module.exports = Blog;
