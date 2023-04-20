// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Californium, W3D4, the topic for today is Nodejs module system’
	
// 	Call all these functions in route.js inside the test-me route handler

const printDate=function(){
    console.log("today's date is =",new Date())
}
const printMonth=function(){
    const months=["jan","feb","march","april","may","june"]
     console.log("current month is =",months[new Date().getMonth()]);
}
const getBatchInfo=function(batch,weekDate,topic){
    console.log(batch,weekDate,topic)
}
module.exports={printDate,printMonth,getBatchInfo}

// or 
// modules.exports.printdate=printdate...similary all we can do