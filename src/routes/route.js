const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const commonFile = require('./common')
const welcomeFnct= require('../logger1/logger')
const helper=require('../util/helper')
const trim=require('../validator/formater')
const upperCase=require('../validator/formater')
const lowercase=require('../validator/formater')
const lodash= require('lodash')
const months=["jan","feb","march","april","may","june","july","aug","sep","oct","nov","dec"]

router.get('/test-me', function (req, res) {
    welcomeFnct.welcome("dhanraj","technetium")
    helper.printDate()
    helper.printMonth()
    helper.getBatchInfo("technetium","w4d5","topic is nodejs modules")
trim.trim("   this is trim ")
upperCase.upperCase("this is uppercase")
lowercase.lowercase("THIS IS LOWER CASE")

   console.log(lodash.chunk(months,4));
   console.log(lodash.tail([1,3,5,7,9,11,13,15,17,19]));
   console.log(lodash.union([2,3],[4,5],[2,5],[3,7],[9,7]))
   console.log(lodash.fromPairs( [["one key","Onevalue"],["two key","Twokey"]]));
    res.send('This should be working!')
    
});

router.get('/test-you', function (req, res) {
    console.log('This is the constant I created', commonFile.name)
    res.send('Hello there, welcome to this application!')
});


module.exports = router;