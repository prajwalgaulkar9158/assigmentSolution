const { default: mongoose } = require("mongoose")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")
const ObjectId = mongoose.Types.ObjectId

const createBook= async function (req, res) {
    let book = req.body
    // console.log(book.author);
    const author_id= await authorModel.find().select({_id:1})
    const publisher_id = await publisherModel.find().select({_id:1})
    flag1 = false
    flag2 =false
  for (let i=0;i<author_id.length;i++){
    if(author_id[i]._id==book.author){
            flag1 =true}
  }
  for(let j=0;j<publisher_id.length;j++){
    if(publisher_id[j]._id==book.publisher){
        flag2= true
    }
  }

  if(book.author != undefined){
      if(flag1==true){
         if(book.publisher != undefined){
             if(flag2==true){
                  const result= await bookModel.create(book)
                  res.send(result)
             }else{
                res.send("invalid publisher id")
             }
         }else{
            res.send("required publisher id")
         }

      }else{
        res.send("author id invalid")
      }
    }else{
    res.send("required author id")
  }}
//==========================================//
const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send({data: specificBook})

}
//==================================================//
const books= async function (req,res){
  const putDAta=await bookModel.updateMany({publisher:{$in:["64523a5ea1e49f5f20f6dc12","64515c13155fc03077f6def3"]}},{isHardCover:true})
  const data = await bookModel.find().populate("publisher").populate("author")
  console.log(data);
  
  const data2 = await bookModel.find().populate("author")//[{all data of book}]
const  result = data2.filter(ele=>{ ele.author.rating > 3.5})//[{}]
const mainResult = result.map(ele=>(ele._id))//[ _id >3.5]
const price =await bookModel.updateMany({_id:{$in:mainResult}},{$inc:{price:10}})
    res.send(data)
}


   
    module.exports.books=books


//==================================//
const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails



// Edit: New problem (5)
// 5. Create at least 4 publishers (Penguin, Bloomsbury, Saraswati House, HarperCollins). Create at least 6 authors with ratings 2, 3, 3.5, 4, 4.5 and 5. Create around 10 books with these publishers and authors.
// 6)Create a new PUT api /books and perform the following two operations
//  a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.
//  b) For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60)