const mongoose=require('mongoose')

const authorSchema= new mongoose.Schema({
author_id:Number,
author_name:String,
age:Number,
address:String

},{timestamp:true})

module.exports=mongoose.model('refreshBook',authorSchema)