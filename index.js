var readlineSync = require('readline-sync');

var userName = readlineSync.question("Enter your name : ");
console.log("Welcome " + userName + " to DO YOU KNOW Kushank?");

var score = 0

function play(question, answer){
  var userAns = readlineSync.question(question);

  if (userAns.toUpperCase() === answer.toUpperCase()){
    console.log("You are right!");
    score = score + 1;
  }
  else {
    console.log("You are wrong!");
  }

  console.log("Current score: ", score);
  console.log("---------------------------");
}

//array of objects
var questions = [
  {
    question : "What is my last name?",
    answer   : "Sriraj"
  }, 
  
  {
    question : "Where do I live?",
    answer   : "Patna" 
  }, 
  
  {
    question : "What is my favorite thriller book?",
    answer   : "American Kingpin" 
  }
];


for(var i = 0; i < questions.length; i++){

  var currentQuestion = questions[i];
  //call play() function
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Yay! You scored: ", score);