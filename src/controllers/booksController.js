let booksModel=require('../models/booksModel')
let createBook=async function(req,res){
    let data=req.body
    let storeData=await booksModel.create(data)
    res.send({msg:storeData})
}

let getBook=async function(req,res){
    let bookRes= await booksModel.find()
    res.send(bookRes)
}
module.exports.createBook=createBook
module.exports.getBook=getBook