const mongoose=require('mongoose')

const book2Schema= new mongoose.Schema({
    
        name:String,
        author_id:Number,
        price:Number,
        ratings:Number
     

    
    },{timestamp:true})
    
    module.exports=mongoose.model('bookstall',book2Schema)