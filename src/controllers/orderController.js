const orderModel=require("../models/orderModel")
const productModel=require("../models/productModel")
const userModel =require("../models/userModel")
const createOrder= async function (req,res){
    const data =req.body //
   const isfreeappuser=req.headers.isfreeappuser
   console.log(typeof isfreeappuser);
   if(isfreeappuser=="true"){
     data["amount"]=0
     data["isFreeAppUser"]=true
     const result=await orderModel.create(data)
     res.send({msg:result})
     }
     else{
         data["isFreeAppUser"]="false"
         const productId= req.body.productId
         const userId=req.body.userId
         const productPrice=await productModel.findById(productId).select({price:1,_id:0})
         const userAmount =await userModel.findOne({_id:userId}).select({balance:1,_id:0})
         const{price}=productPrice
         const {balance}=userAmount
         data["amount"]=price
         console.log(data);

    if(price>balance){
        res.send({msg:"user have insufficiant balance"})
    }else{
        const subValue=balance-price
        const updateBalance= await userModel.findOneAndUpdate({_id:userId},{balance:subValue},{new:true})
        const result=await orderModel.create(data)
        res.send({msg:result})
    }
     }

    //database call create orderr in db
    //update in db
    // res.send(data)
}
module.exports.createOrder=createOrder

