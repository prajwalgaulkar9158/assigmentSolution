const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
   bookName:String,
   authorName:{
    type:String,
    require:true
   },
   price:{
    INR:String,
    EURO:String},
   year:{
    type:Number,
    default:2021
   },
   tag:{
    type:[String,String,String]
   },
   totalPages:Number,
   stockAvailable:Boolean,


}, { timestamps: true });


module.exports = mongoose.model('bookData', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
