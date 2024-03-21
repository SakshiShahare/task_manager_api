require("dotenv").config();
const express = require("express");
const {connectDB} = require("./connect/connect.js");

const app = express();

const port = 3000;


const save = async () =>{
    try {
        await connectDB();
        console.log("connected successfully");
        app.listen(port , () =>{
            console.log("listening on server 3000");
        })
    } catch (error) {
        console.log("connection error");
    }
}

save();

//git commits are successfull