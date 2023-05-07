const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const commonMW = require ("../middlewares/commonMiddlewares")
const productController=require("../controllers/productController")
const orderCollection = require("../controllers/orderController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post('/createProduct',productController.createProduct)
router.post("/createUser",commonMW.UserMw,UserController.createUser)
router.post("/createOrder",commonMW.UserMw,commonMW.userProductValidation,orderCollection.createOrder)

module.exports = router;