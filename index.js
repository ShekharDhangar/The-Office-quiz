var rs = require('readline-sync')
var chalk = require('chalk')

// Introduction
var userName = rs.question(chalk.green("May I have the guest's name? "))
console.log(chalk.green("Welcome " + (chalk.blueBright(userName)) + ("!")))

console.log()
// Question-Trick
console.log("To play 'the office' quiz,you need to pass a question.")
console.log()
var userAnswer = rs.question("How many minutes did Michael worked at the office ? (Enter only numbers!) \n")
if (userAnswer === "9986000") {
  console.log("Correct!")
  console.log(chalk.cyanBright(" Now,lets play a quiz on The Office"))
  console.log()
  console.log(chalk.bgRedBright("Level 0 Starts!"))
  var score = 0

  // function for printing questions and taking answers and score conditions
  function quiz(question, answer) {
    var userAns = rs.question(chalk.greenBright(question))
    if (userAns.toUpperCase() === answer.toUpperCase()) {
      console.log(chalk.yellowBright("Wow! You are Correct"))
      score++
    } else {
      console.log(chalk.red("Oops! Incorrect"))
    } console.log("Current Score: ", score)
    console.log()
  }

  // array of objects 
  questions = [{
    question: "What is the name of the 1st Episode of the 1st Season? ",
    answer: "Pilot"
  }, {
    question: "How long does Ryan say WUPH can survive without cash infusion?(only numbers) ",
    answer: "9"
  }, {
    question: "Which movie is like watching 80000 times? ",
    answer: "Die Hard"
  }, {
    question: "Who is missing in the 9,986,000 minutes song? ",
    answer: "Dwight"
  }, {
    question: "What Michael wears in casual fridays? ",
    answer: "Jeans"
  }, {
    question: "Who kidnaps Angela? ",
    answer: "Mose"
  }, {
    question: "Who's birthday did Jim and Dwight forget? ",
    answer: "Kelly"
  }, {
    question: "Who steals in the office? ",
    answer: "Creed"
  }, {
    question: "What part Native American is Micheal Scott? ",
    answer: "Two Fifteenths"
  }, {
    question: "What Andy calls Jim? ",
    answer: "Big Tuna"
  }]
  // for level 0
  for (var i = 0; i < 4; i++) {
    quiz(questions[i].question, questions[i].answer)
  }
  // for level 1
  if (score >= 2) {
    console.log(chalk.bgRedBright("Level 1 Starts!"))
    for (var i = 4; i < questions.length; i++) {
      quiz(chalk.cyanBright(questions[i].question), questions[i].answer)
    }
  }
  // for storing high score data
  var scorer = [{
    name: "Sid",
    highscore: "9",
  }, {
    name: "Jay",
    highscore: "10"
  }]
  // printing high scores
  console.log(chalk.bgBlue("Your Final score: ", score))
  console.log()
  console.log(chalk.blue("They are the high scorers"))

  for (var i = 0; i < scorer.length; i++) {
    console.log(chalk.yellowBright(scorer[i].name, ":", scorer[i].highscore))
  } console.log()
  // feedback for users
  if (score < 2) {
    console.log(chalk.bgCyan("Please watch 'The Office!' "))
  } else {
    console.log(chalk.bgCyan("Yay! You know 'The Office'"))
  }

  // function which compares user score and high score
  function userScore() {
    var playerScore = (scorer[0].highscore);
    if (score >= playerScore) {
      console.log(chalk.greenBright("Congrats ! You have achievd the high score. Please send the screenshot"))
    }
  }
  (userScore())
} else {

  console.log("Oops! You need to watch'the office'as soon as possible")
}


