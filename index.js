const { log } = require("console");
var rlsync = require("readline-sync");
var readuser=rlsync.question("Hello, type your name ");

highestScorer={
  name:"Krishna",
  score:0
}

console.log("\nThe highest scorer of this game upto now is: ",highestScorer.name,"with a score: ",highestScorer.score)
console.log("Hii", readuser,"Do you know Krishna? Lets see:");

var questionbank =[{
  question:"Where does he live? ",
  answer:"Mumbai"
},{
  question:"Where would Krishna love to go for a trip? ",
  answer:"Goa"
},{
  question:"What's his age? ",
  answer:"21"
},{
  question:"What sport does Krishna play? ",
  answer:"Football"
},{
  question:"What art does Krishna follow? ",
  answer:"Music"
}]

var score=0

for(let i=0;i<questionbank.length;i++){
  var useranswer=rlsync.question(questionbank[i].question);
  if(useranswer.toLowerCase()===questionbank[i].answer.toLowerCase()){
    score++;
    console.log("Right!\n");
  }else{
    console.log("You're wrong.\n");
  }
  console.log("Your current score is:", score);
}
console.log(readuser,",your final score is:",score);

if(score>highestScorer.score){
  highestScorer.name=readuser;
  highestScorer.score=score;
  console.log("New highest scorer: ",highestScorer.name);
}