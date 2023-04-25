const express = require('express');
const router = express.Router();
let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]
 
 
 
router.post('/test-post-api',function(req,res){
    let result=[]
    let votingAge=(req.query.votingAge)
    for(let i=0;i<persons.length;i++){
        if(persons[i].age>votingAge){
            persons[i].votingStatus=true
result.push(persons[i])
        }
    }
    res.send(result)
})


module.exports = router;