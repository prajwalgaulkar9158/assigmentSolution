const mongoose =require("mongoose")
const productSchema= new mongoose.Schema({
    name:String,
    category:String,
    price:{
        type:Number,
        req:true
    }
})

module.exports=mongoose.model("productCollection",productSchema)