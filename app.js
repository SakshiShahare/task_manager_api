require("dotenv").config();
const express = require("express");
const {connectDB} = require("./connect/connect.js");

const app = express();
const task = require('./route/task.js')
//using the static assest
app.use(express.static('./public'));
//parsing the json body 
app.use(express.json())

//routes
app.use('/api/v1/tasks' , task)

const port = 8000;


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