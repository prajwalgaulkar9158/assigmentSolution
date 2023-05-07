const mongoose =require("mongoose")
const ObjectId=mongoose.Schema.Types.ObjectId
const orderSchema= new mongoose.Schema({

    userId:{
        type:ObjectId,
        ref:"User"
    },
    productId:{
        type:ObjectId,
        ref:"productCollection"
    },
    amount:Number, //default =0
    date:String,
    isFreeAppUser:Boolean
})

module.exports=mongoose.model("order",orderSchema)