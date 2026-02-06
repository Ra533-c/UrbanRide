const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const path = require("path");


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname , "public")));
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));

app.get("/", (req, res) => {
    res.send("Hello World!");
});


module.exports = app ;