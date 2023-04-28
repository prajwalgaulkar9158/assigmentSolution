const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )//1)
router.get("/getBooksData", BookController.getBooksData)//2)
router.get("/getBooksInYear",BookController.getBooksInYear)
router.get("/getXINRBooks",BookController.getXINRBooks)
router.get("/getRandomBooks",BookController.getRandomBooks )
router.post("/getParticularBooks",BookController.getParticularBooks)

module.exports = router;