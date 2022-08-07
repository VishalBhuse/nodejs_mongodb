const express = require("express");

const User = require("../schema/user.schema");

const userRoute = express.Router();

userRoute.get("/", async (req, res) => {
  let user = await User.find().populate("blogs");
  res.send(user);
});

// userRoute.get("/:name", async (req, res) => {
userRoute.get("/:id", async (req, res) => {
  // let user = await User.findOne({_id: req.params.id});
  // let user = await User.findOne({name: req.params.name});
  let user = await User.findById(req.params.id);
  res.send(user);
});

userRoute.post("/", async (req, res) => {
  try {
    let user = await User.create(req.body);
    res.send(user);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

userRoute.delete("/:id", async (req, res) => {
  try {
    let user = await User.findByIdAndDelete(req.params.id);
    res.send("Delete Successfully");
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = userRoute;
