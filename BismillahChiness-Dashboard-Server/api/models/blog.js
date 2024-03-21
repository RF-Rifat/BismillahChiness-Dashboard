const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    name: "String",
    title: "String",
    type: "String",
    date: "String",
    authorImage: "String",
    blogImage: "String",
    post: "String",
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
