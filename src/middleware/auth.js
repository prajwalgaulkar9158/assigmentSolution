const jwt =require("jsonwebtoken")

const authenticate = function(req, res, next) {

try {
    const token =req.headers["x-auth-token"]
    if(!token){
        return res.status(400).send({status:false,msg:"token is not found please type token"})
    }
     
   jwt.verify(token, "this is token by prajwal")
    next()
    
} catch (error1) {
    res.status(401).send({error:error1,msg:"not authanticate"})
    
}}

  
  
 module.exports.authenticate=authenticate


const authorise = function(req, res, next) {

    try {
        const userId= req.params.userId
        const token= req.headers["x-auth-token"]
        const decodedToken= jwt.verify(token,"this is token by prajwal")
        if(userId==decodedToken.Id){
        next()}
    } catch (error1) {
        res.status(403).send({error:error1,msg:"unauthorise"})
    }
   
}
module.exports.authorise=authorise






// let str="cococodededecode"//more 6
//  let str2="code"
//  function one(str,str2){

//    while(str.length>0){
//     if(str.includes(str2)){
//     str=str.split(str2).join("")
//    }else{
//     return "no"
//    }
// }
// if(str==''){
//     return "uyes"
// }
  
//  }
// let res= one(str,str2)
// console.log(res);

// let arr=[2,3,4,5]
// let z = arr.reduce((h1,h2)=>{
//     return h1+h2
// })
// console.log(z);


 