const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const UserMw= function(req,res,next){
const headerData =req.headers.isfreeappuser
if(headerData== undefined){
    res.send({msg:"request is missing a mandatory header."})
}else{
    next()
}
}

module.exports.UserMw=UserMw

//========//
const userProductValidation= async function(req,res,next){
const userId= req.body.userId
const productId=req.body.productId
const userDoc= await userModel.find().select({_id:1})
const productDoc = await productModel.find().select({_id:1})


flaguser=false
 flagproduct =false

for(let i=0;i<userDoc.length;i++){
    if(userDoc[i]._id==userId){
    flaguser=true
    }
    
}
for(let j=0;j<productDoc.length;j++){
    if(productDoc[j]._id==productId){
     flagproduct=true
    }
}

if(userId != undefined){
    
  if(flaguser==true){
     if(productId!=undefined){
         if(flagproduct==true){
                 next()
         }else{
            return res.send({msg:"invalid ProductId"})
         }
     }else{
       return res.send({msg:"provide productId"})
     }
  }else{
     return res.send({msg:"userId invalid"})
  }
}else{
  return   res.send({msg:"please provide userId"})
}


}
module.exports.userProductValidation=userProductValidation











// const mid1= function ( req, res, next) {
//     req.falana= "hi there. i am adding something new to the req object"
//     console.log("Hi I am a middleware named Mid1")
//     next()
// }

// const mid2= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

// const abc = function(req, res, next) {
//     //get the users IP
//     //save it in db
//     // console log
//     next()
// }

// const def = function(req, res, next) {
//    //get the users IP
//    //save it in db
//    // console log
//    next()
// }

// const xyz = function(req, res, next) {
//    //get the users IP
//    //save it in db
//    // console log
//    next()
// }

// module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
// module.exports.abc = abc



