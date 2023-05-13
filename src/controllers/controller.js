const jwt =require('jsonwebtoken')
const userModel=require('../models/userModel')

const createUser=async function(req,res){

    try {
        
    const user= req.body
    const data= await userModel.create(user)
    res.status(201).send({msg:data})
    } catch (error1) {
        res.send({error:error1})
        
    }
}
module.exports.createUser=createUser

//==========================//

const loginUser= async function (req,res){

    const userId= req.body.emailId
    const password=req.body.password

    const user= await userModel.findOne({emailId:userId ,password:password})
    if(!user){
        return res.status(401).send({status:false, msg:"invalid Id Or password"})
    }

// token generation 

const token =jwt.sign(
    {
        Id:user._id.toString(),
        password:user.password,
        mobile:user.mobile
    },
    "this is token by prajwal"
)

   res.setHeader("x-auth-token",token)
    res.status(200).send({status:true,msg:token})
}
module.exports.loginUser=loginUser

//==========================================//

const getUserData=async function (req,res,){
    const userId= req.params.userId
    const user= await userModel.findOne({_id:userId})
    if(!user){
        return res.status(401).send({status:false,msg:"invalid Id & Password"})
    }
    res.send({status:true,msg:user})
}
module.exports.getUserData=getUserData

//===========================================//

const updateUser= async function(req,res){
    const userId= req.params.userId
    const user= await userModel.findOne({_id:userId})
    if(!user){
        return res.status(401).send({status:false,msg:"invalid Id"})
    }
    let updation= req.body
    const userUpdate= await userModel.findOneAndUpdate({_id:userId},updation,{new:true})
    res.status(200).send({status:true,msg:userUpdate})
}
module.exports.updateUser=updateUser

//==========================//
 const deleteUser=async function (req,res){
    const userId= req.params.userId

    try {
        const user= await userModel.findOne({_id:userId})
        res.status(200).send({status:true,isDeleted:true})


    } catch (err) {
        res.status(401).send({error:err,msg:"invalid Id"})

    }
    

 }
 module.exports.deleteUser=deleteUser

 //================================//