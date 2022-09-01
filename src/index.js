const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port  = process.env.PORT || 8000;
const Usermiddle = require("./route/user.route");
const Blogmiddle = require("./route/blog.route");

app.use(express.json());
require('dotenv').config();

app.use("/users", Usermiddle);
app.use("/blog", Blogmiddle);

app.get("/", (req, res) => {
    res.send("home")
})

app.listen(port, async ()=>{
    await mongoose.connect(process.env.DBLINK );
    console.log(`Server running at http://localhost:${port}`);
}); 
