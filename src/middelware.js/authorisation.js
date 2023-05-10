const jwt = require("jsonwebtoken")

const authorisation = async function (req, res, next) {
   let userId = req.params.userId
   const token = req.headers['x-auth-token']
   
   let decodedToken = jwt.verify(token,  "functionup-plutonium-very-very-secret-key")
    if(decodedToken.userId != userId) return res.send({status:false, msg:"unauthorised for this"})
    next()
} 

module.exports.authorisation= authorisation