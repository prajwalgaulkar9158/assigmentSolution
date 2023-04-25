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

router.get('/sol1',function(req,res){
    //find missing number of 
    let arr=[1,2,3,5,6,7]
    let  n=7
    let missingNumber
    let sumOfNumberIs=n*(n+1)/2
    let count=0
    for(let i=0;i<arr.length;i++){
        count=count+arr[i]   
    }
    missingNumber= sumOfNumberIs-count
    res.send(  { data: missingNumber  }  );
})

router.get('/sol2',function(req,res){
    //find missing number of 
    let arr=[33,34,35,37,38]
    let  first=arr[0]
    let last=arr[arr.length-1]
    let n = arr.length+1
    let missingNumber
    let sumOfNumberIs=n*(first + last)/2
    let count=0
    for(let i=0;i<arr.length;i++){
        count=count+arr[i]   
    }
    missingNumber= sumOfNumberIs-count
    res.send(  { data: missingNumber  }  );
})

let players= [
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ]
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ]
    },

]

router.post('/players',function(req,res){
 let newPlayer=(req.body)

count=0
for(let i=0;i<players.length;i++){
    if(players[i].name==newPlayer.name){
count++
    }
}
if(count==0){
    players.push(newPlayer)
    res.send({data:players,status:true})
}else(res.send("person allerady exist"))

})

module.exports = router; 



