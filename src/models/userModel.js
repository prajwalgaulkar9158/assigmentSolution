const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
   balance:{
    type:Number,
    default:100
   },
    gender: {
        type: String,
        enum: ["male", "female", "other"] 
    },
    age: Number,
    address:String
    
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) 



