// what is the data I need in my app?

// questions
  // what does each question have?
    // text
    // choices
    // answer
$(document).ready(function() {
  // console.log("hello");
// prompt("are you ready");
  var questions = [
  {
    text: "What band had the hit song 'Smells Like Teen Spirit'?",
    choices: ["Guns and Roses", "Nirvana", "Soundgarden", "Red Hot Chili Peppers"],
    answer: "Nirvana"
  },
  {
    text: "Where was the first Hard Rock Cafe opened?",
    choices: ["Washington, DC", "Amsterdam, Holland", "Los Angeles, California", "Picadilly, England"],
    answer: "Picadilly, England"
  },
  {
    text: "Who was the original lead singer of Queen?",
    choices: ["Eddie Vedder", "Freddie Mercury", "Chris Cornell", "Adam Lambert"],
    answer: "Freddie Mercury"
  },  {
    text: "ABBA is a pop group from what country?",
    choices: ["USA", "England", "Sweden", "Canada"],
    answer: "Sweden"
  },  {
    text: "What was the first music video played on MTV?",
    choices: ["Toto", "Smooth Criminal", "Safety Dance", "Video Killed the Radio Star"],
    answer: "Video Killed the Radio Star"
  },  {
    text: "Which music group has received the most Grammy Awards?",
    choices: ["U2", "Coldplay", "Foo Fighters", "Dixie Chicks"],
    answer: "U2"
  },  {
    text: "What is the real name of Fatboy Slim?",
    choices: ["Norman Cook", "Wasalu Jaco", "Baldemar Huerta", "Joseph Cartagena"],
    answer: "Norman Cook"
  },  {
    text: "What Canadian electronic duo is made up by members 'DC' and 'Hooks'?",
    choices: ["Adventure Club", "Zeds Dead", "Dog Blood", "MSTRKRFT"],
    answer: "Picadilly, England"
  },  {
    text: "What was the name of the Jay-Z/Linkin Park collaboration from 2004?",
    choices: ["Collaboration", "Numb/Encore", "It's a Hard Knock Life", "The Black Album"],
    answer: "Numb/Encore"
  },  {
    text: "What is the nickname of the rapper played by Eminem in the movie '8 Mile'?",
    choices: ["Marshall Mathers", "B. Rabbit", "M&M", "Slim Shady"],
    answer: "B. Rabbit"
    },
]
var answers = ["Nirvana", "Picadilly, England", "Freddie Mercury", "Sweden", "Video Killed the Radio Star","U2","Norman Cook", "Zeds Dead", "Numb/Encore", "B. Rabbit" ];

var numberOfQuestions = 10;
var score = 0;

// need a way to tell what the user guessed
var inputs = $("input[type='radio']")
inputs.on("click", function (e) {
  var userGuess = $(this).val()
  var questionNumber = $(this).parent().data("question")
  var answer = answers[questionNumber]
  if (userGuess === answer) {
    score++
    // update the display with the score
  }
  console.log(score)
  console.log(answer)
  console.log(questionNumber);
  console.log(userGuess);
})

// does user guess = answer?
// if it does what should happen? - add 1 to score
// otherwise do nothing




});


// compare what the user guessed with the answer to that question








  // if the answer is the same, add 1 to the score

  // otherwise, do nothing





 // Need to create a function to score the game




 //*



//*


 // *
// question 2
// if answer == #2d
//   return correct
//  else incorrect
// *


// // *
// question 3
// if answer == #3b
// return correct
// else incorrect


 // // *
 // question 4
 // if answer == #4c
 // return correct
 // esle incorrect




 // // *
 // question 5
 // if answer == #5d
 // return correct
 // else incorrect



// // *
// question 6
// if answer == #6a
// return correct
// else incorrect



// // *
// question 7
// if answer == #7a
// return correct
// else incorrect



// // *
// question 8
// if answer == #8b
// return correct
// else incorrect




// // *
// question 9
// if answer == #9b
// return correct
// else incorect





// // *
// question 10
// if answer == #10b
// return correct
// else incorrect
