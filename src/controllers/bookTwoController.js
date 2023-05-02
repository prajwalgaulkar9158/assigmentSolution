const bookmodell= require('../models/book2Model')

const createbook= async function (req,res){
    let data = req.body
   let result= await bookmodell.create(data)
    res.send(result)
}

module.exports.createbook=createbook