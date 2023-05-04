const mongoose = require('mongoose');
const authorModel = require('./authorModel');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type:ObjectId,
        ref:"LibraryAuthor"
    }, 
    price: Number,
    rating: Number,
    publisher:{
        type:ObjectId,
        ref:"newPublisher"
    },
    isHardCover:{
        type:Boolean,
        default:false
    }


}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)
