const authorModule= require('../models/authorModel')
const book2Model = require('../models/book2Model')

const createAuthorBook= async function(req,res){
    let data = req.body
    let a= await authorModule.create(data)
    res.send(a)
}
 module.exports.createAuthorBook=createAuthorBook

 //=======================================//

 const bookOfChetan= async function(req,res){
    let a= await authorModule.find({author_name:"Chetan Bhagat"}).select({author_id:1,_id:0})
    let id=a.map(ele=>(ele.author_id))
    // console.log(id);
    let b = await book2Model.find({author_id:id[0]}).select({name:1,_id:0})
    res.send(b)
 }
 module.exports.bookOfChetan=bookOfChetan

 //=====================================================================//

const authorOfTwoState= async function (req,res){
 let a= await book2Model.findOneAndUpdate({name:"Two states"},{price:100},{new:true})//.select({price:1,_id:0})
let Bookprice=a.price
 let b = await authorModule.find({author_id:a.author_id}).select({author_name:1,_id:0})
 let obj ={...b,Bookprice}
res.send(obj)
}
module.exports.authorOfTwoState=authorOfTwoState
//================================================//

const costBetween=async function(req,res){
    let a = await book2Model.find({price:{$gte:50,$lte:100}})
    let b = a.map(ele=>(ele.author_id))//[1 1 1 1 2]
    
    let c= await authorModule.find({author_id:{$in:b}}).select({author_name:1,_id:0})
  
    res.send(c)
}

//======================================//
    

module.exports.costBetween=costBetween