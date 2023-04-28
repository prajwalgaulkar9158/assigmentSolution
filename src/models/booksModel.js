const mongoose= require("mongoose")
const bookSchema = new mongoose.Schema(
    {
        bookname:String,
        authorsName:String,
        category: {
            type: String,
            unique: true,
            required: true
        },
        year:Date
    },{timestamps:true}
)
module.exports= mongoose.model('books',bookSchema)