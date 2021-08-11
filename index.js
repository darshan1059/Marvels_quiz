var readlineSync = require("readline-sync");
const chalk = require('chalk');

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
  question: "What is the original name of ironman ? \n",
  answer: "Tony"
}, {
  question: "What is the name of thor's hammer ? \n",
  answer: "Mjolnir"
}, {
  question: "What is the name of hulk in the movie ? \n",
  answer: "Bruce"
}, {
  question: "Before becoming Vision, what is the name of Iron Man’s A.I. butler ? \n",
  answer: "Jarvis"
},{
  question: "What is Captain America’s shield made of ? \n",
  answer: "Vibranium"
},{
  question: "What is the real name of the Black Panther ? \n",
  answer: "Tchalla"
},{
  question: "What fake name does Natasha use when she first meets Tony ? \n",
  answer: "Natalie"
},{
  question: "Who does the Mad Titan sacrifice to acquire the Soul Stone ? \n",
  answer: "Gamora"
},{
  question: "Who is Black Panther’s sister ? \n",
  answer: "Shuri"
},
]

function welcome() {
  var userName = readlineSync.question(chalk.black.bgWhiteBright.bold("What's your name? \n") );

  console.log(chalk.black.bgWhiteBright.bold("Welcome " + userName + "!" + " Lets play quiz on MARVELS? \n"));

  var userAns = readlineSync.question(chalk.black.bgWhiteBright.bold("Are you ready ? Enter y or n: \n"));
  if (userAns === "y") {
    game();
    showScores();
    highScore();
  }
  else {
    console.log(chalk.black.bgMagentaBright.bold("Thanks for coming Goodbye !"));
    return;
  }
}

function play(question, answer) {
  var userAnswer = readlineSync.question(chalk.black.bgWhiteBright.bold(question));

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.black.bgGreenBright("You are right!"));
    score = score + 1;

  } else {
    console.log(chalk.white.bgRedBright("You are wrong!"));

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
  console.log(chalk.white.bgBlackBright.bold("YAY! You have scored: ", score));
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
      console.log(chalk.black.bgWhiteBright.bold("Thanks For Participating..!! "));

      return;
    }

  }
  console.log(chalk.black.bgWhiteBright.bold("Hurraaay! You have made new highscore and ur score is: ", newHighScore));
  console.log("\n");
  console.log(chalk.white.bgBlackBright.bold("Kindly send me your highscore screenshot, so that i can update it on my database 👇"));
  highScores.map(score => console.log(chalk.white.bgBlackBright.bold(score.name, " : ", score.score)));
  console.log(chalk.black.bgWhiteBright.bold("Thanks For Participating..!! "));

}
welcome();