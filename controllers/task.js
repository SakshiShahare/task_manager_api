const Task = require("./model/Task");


//creating the task and adding to the connected database
const createTask = async (req, res)=>{
    const task = await Task.create(req.body);
    res.status(201).json({task});
}
//getting all the task from the database
const getAllTask = async (req, res) =>{
    const tasks = await Task.find({});
    res.status(200).json({tasks});
}
//getting the task with the help of id
const getTask = async (req ,res) =>{
    const {_id : taskID}= req.params;
    const task = await Task.findOne({_id : taskID});

    if(!task){
        res.status(404).json("Task not found");
    }

        res.status(200).json({task});
}

//deleting the task with the help of id 
const deleteTask = async (req ,res) =>{
    const {_id : taskID}= req.params;
    const task = await Task.findOneAndDelete({_id : taskID});

    if(!task){
        res.status(404).json("Task not found");
    }

        res.status(200).json({task});
}
//updating the task with the help of id
const updateTask = async (req, res) =>{
    const {_id : taskID} = req.params;
    const task = await Task.findOneAndUpdate({_id : taskID} , req.body , {new : true , runValidators : true});

    if(!task){
        res.status(404).json("Task not found");
    }
        res.status(200).json({task});
}

//exporting the module to use with the router

module.exports = {getAllTask , getTask , createTask , updateTask , deleteTask};

