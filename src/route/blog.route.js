const express = require("express");

const BLog = require("../schema/blog.schema");

const blogRoute = express.Router();

blogRoute.get("/", async (req, res) => {
  let blog = await BLog.find({},{title:1}).populate("author",{
    name:1,
    age:1,
    email:1
  });
  res.send(blog);
});

// blogRoute.get("/:name", async (req, res) => {
blogRoute.get("/:id", async (req, res) => {
  // let blog = await BLog.findOne({_id: req.params.id});
  // let blog = await BLog.findOne({name: req.params.name});
  let blog = await BLog.findById(req.params.id);
  res.send(blog);
});

blogRoute.post("/", async (req, res) => {
  try {
    let blog = await BLog.create(req.body);
    res.send(blog);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

blogRoute.delete("/:id", async (req, res) => {
  try {
    let blog = await BLog.findByIdAndDelete(req.params.id);
    res.send("Delete Successfully");
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = blogRoute;
