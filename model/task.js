const mongoose = require("mongoose");
const { isModuleNamespaceObject } = require("util/types");

const TaskSchema = new mongoose.Schema({

    description  : {
        type : String, 
        required : [true, 'please provide the description'],
        trim : true,
        maxLength : [20 , 'max length is 20 characters']
    },
    completed : {
        type : Boolean,
        default : false
    }
})

module.exports =   mongoose.model("Task" , TaskSchema);

