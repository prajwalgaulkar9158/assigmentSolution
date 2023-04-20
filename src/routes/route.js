const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const commonFile = require('./common')
const myUnderscore = require('underscore')

let Movies=["Rang De Basanti","the shining","lords of ring","Batman begins"]

const films=[ {
    "id": 1,
    name: "The Shining"
   }, {
    "id": 2,
    name: "Incendies"
   }, {
    "id": 3,
    name: "Rang de Basanti"
   }, {
    "id": 4,
    name: "“Finding Nemo”"
   }]
   

router.get('/test-me', function (req, res) {
    res.send('This should be working!')
});

router.get('/test-you', function (req, res) {
    console.log('The exported module is: ',commonFile)
    commonFile.doSomething()
    console.log('This is the constant I created', commonFile.name)
    res.send('Hello there, welcome to this application!')
});

router.get('/test-underscore', function(req, res){
    let result = myUnderscore.first([11,12,23,44,15], 4)
    console.log('the result is',result)
    res.send('done')
})

router.get('/cohorts', function (request, response){
    // logic to get the cohorts from database
    // logic tp get only the active cohorts
    // logic to get only the cohort with a size than 50
    // logic to get only the backend cohorts
    response.send(['technetium','nobelium'])
})

router.get('/students', function(req, res){
    // receive or access the query params in the code
    // write a logic on these query params
    // city, score
    console.log(req.query)
    let requestedCity = req.query.city
    let sortField = req.query.sort
    // logic to get students
    res.send(["Sabiha","Neha","Akash","Sonali"])
})

router.get('/students/:studentName', function(req, res) {
    console.log(req.params.studentName)
    /// go to database and search for studentName student
    // store the data found in this variable - studentDetails
    //res.send({data: studentDetails})
    res.send('student data')
})

router.get('/movies',function(req,res){
    res.send(Movies)
})

router.get('/movies/:indexNumber',function(req,res){
let movieOfIndex= Movies[req.params.indexNumber]
let indexOfmovies=req.params.indexNumber
if(indexOfmovies>(Movies.length-1)||indexOfmovies<0){
    res.send('please type valid index ')
}else{

    
    res.send(movieOfIndex)
}
})

router.get('/film',function(req,res){
    res.send(films)
})

router.get ('/film/:filmId',function(req,res){
    let filmId=(req.params.filmId)
    let a=( films.filter(ele=>(ele.id==filmId)))
res.send( a.length==0?"film of this id doesn't exist":a[0])
})

module.exports = router; 