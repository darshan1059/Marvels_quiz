var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "Suresh",
    score: 3,
  },

  {
    name: "Ramesh",
    score: 2,
  },
]

var questions = [{
  question: "What is the original name of ironman ? ",
  answer: "Tony"
}, {
  question: "What is the name of thor's hammer ? ",
  answer: "Mjolnir"
}, {
  question: "What is the name of hulk in the movie ? ",
  answer: "Bruce"
}, {
  question: "Before becoming Vision, what is the name of Iron Man’s A.I. butler ? ",
  answer: "Jarvis"
},{
  question: "What is Captain America’s shield made of ? ",
  answer: "Vibranium"
},{
  question: "What is the real name of the Black Panther ? ",
  answer: "Tchalla"
},{
  question: "What fake name does Natasha use when she first meets Tony ? ",
  answer: "Natalie"
},{
  question: "Who does the Mad Titan sacrifice to acquire the Soul Stone ? ",
  answer: "Gamora"
},{
  question: "Who is Black Panther’s sister ? ",
  answer: "Shuri"
},
]

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + "!" + " Lets play quiz on MARVELS? ");

  var userAns = readlineSync.question("Are you ready ? Enter y or n: ");
  if (userAns === "y") {
    game();
    showScores();
    highScore();
  }
  else {
    console.log("Thanks for coming Goodbye !");
    return;
  }
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right!");
    score = score + 1;

  } else {
    console.log("You are wrong!");

  }

  console.log("current score is: ", score);
  console.log("-------------------------");
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You have scored: ", score);
}

function highScore() {
  var currentScore = score;
  for (var i = 0; i < highScores.length; i++) {
    //console.log(currentScore> highScores[i].score);
    if (currentScore > highScores[i].score) {
      var newHighScore = currentScore;
    }
    else {
      console.log("\n");
      console.log("Thanks For Participating..!! ");

      return;
    }

  }
  console.log("Hurraaay! You have made new highscore and ur score is: ", newHighScore);
  console.log("\n");
  console.log("Kindly send me your highscore screenshot, so that i can update it on my database 👇");
  highScores.map(score => console.log(score.name, " : ", score.score));
  console.log("Thanks For Participating..!! ");

}
welcome();