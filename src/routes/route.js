const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController");
const booksModel = require("../models/booksModel.js");
const bookController=require("../controllers/booksController.js")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)


router.post('/createBooks',bookController.createBook)
router.get('/getbooks',bookController.getBook)

module.exports = router;