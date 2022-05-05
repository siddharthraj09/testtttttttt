const mongoose = require('mongoose')

const userSchema= mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please add a name']
    },
    email:{
        type:String,
        required:[true, 'Please add an email'],
        unique: true,
    },
    mobile:{
        type:String,
        required:[true, 'Please add your mobileno'],
        maxlength: [20, 'name can not be more than 20 characters'],
    },
    rollno:{
        type:Number,
        required:[true, 'Please add your rollno'],
    },
    address:{
        type:String,
        required:[true, 'Please add your address'],
    },
    
    isAdmin:{
        type:Boolean,
        required:true,
        default:false,
    }
},
{
    timestamps:true,
})

module.exports = mongoose.model('Task',userSchema)
