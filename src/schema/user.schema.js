const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true ,unique: true},
  email: {type:String, required:true, default: "a@bg.com" },
  gender: { type: String, required: true , enum: ['Male', 'Female'] },
  age: {type:Number, min:20, max:100},
  blogs:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "blogs1",
  }]
},
{
versionKey: false,
}
);

const User = mongoose.model("vishals1", userSchema);

module.exports = User;
