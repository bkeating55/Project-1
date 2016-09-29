// NHO: in general, I would recommend leaving unused / commented out code and pseudocode on another branch or removing it entirely
// This way your code and clean before you show it off to potential employers.

// NHO: ran code through atom's beautify package for formatting

// what is the data I need in my app?

// questions
// what does each question have?
// text
// choices
// answer
$(document).ready(function() {
  // console.log("hello");
  // prompt("are you ready");
  // NHO: Don't think this structure is being used currently, but this seems like some data that you could use to
  // dynamically create your game.

  var questions = [{
    text: "What band had the hit song 'Smells Like Teen Spirit'?",
    choices: ["Guns and Roses", "Nirvana", "Soundgarden", "Red Hot Chili Peppers"],
    answer: "Nirvana"
  }, {
    text: "Where was the first Hard Rock Cafe opened?",
    choices: ["Washington, DC", "Amsterdam, Holland", "Los Angeles, California", "Picadilly, UK"],
    answer: "Picadilly, UK"
  }, {
    text: "Who was the original lead singer of Queen?",
    choices: ["Eddie Vedder", "Freddie Mercury", "Chris Cornell", "Adam Lambert"],
    answer: "Freddie Mercury"
  }, {
    text: "ABBA is a pop group from what country?",
    choices: ["USA", "England", "Sweden", "Canada"],
    answer: "Sweden"
  }, {
    text: "What was the first music video played on MTV?",
    choices: ["Toto", "Smooth Criminal", "Safety Dance", "Video Killed the Radio Star"],
    answer: "Video Killed the Radio Star"
  }, {
    text: "Which music group has received the most Grammy Awards?",
    choices: ["U2", "Coldplay", "Foo Fighters", "Dixie Chicks"],
    answer: "U2"
  }, {
    text: "What is the real name of Fatboy Slim?",
    choices: ["Norman Cook", "Wasalu Jaco", "Baldemar Huerta", "Joseph Cartagena"],
    answer: "Norman Cook"
  }, {
    text: "What Canadian electronic duo is made up by members 'DC' and 'Hooks'?",
    choices: ["Adventure Club", "Zeds Dead", "Dog Blood", "MSTRKRFT"],
    answer: "Picadilly, England"
  }, {
    text: "What was the name of the Jay-Z/Linkin Park collaboration from 2004?",
    choices: ["Collaboration", "Numb/Encore", "It's a Hard Knock Life", "The Black Album"],
    answer: "Numb/Encore"
  }, {
    text: "What is the nickname of the rapper played by Eminem in the movie '8 Mile'?",
    choices: ["Marshall Mathers", "B. Rabbit", "M&M", "Slim Shady"],
    answer: "B. Rabbit"
  }, ]
  var answers = ["Nirvana", "Picadilly, UK", "Freddie Mercury", "Sweden", "Video Killed the Radio Star", "U2", "Norman Cook", "Zeds Dead", "Numb/Encore", "B. Rabbit"];

  // NHO: another potential refactoring idea is to organize your code into a global object or some pattern that will help with over code maintainability

  var numberOfQuestions = 10;
  var score = 0;
  var numberOfClicks = 0;
  // need a way to tell what the user guessed
  var inputs = $("input[type='radio']")
  inputs.on("click", function(e) {
      numberOfClicks++
      var userGuess = $(this).val()
      var questionNumber = $(this).parent().data("question")
      var answer = answers[questionNumber]
      if (userGuess === answer && numberOfClicks <= answers.length) {
        score++
        updateScore() // NHO: How could you display to the user that they got each question right or wrong
        $(this).off("click")
      }
    })
    // update score to display
  function updateScore() {
    $("#output").text(score + " / 10")
  }

})

// NHO: pseudocode to show questions one by one
// start with only one question showing and a currentQuestion counter
// After each question hide at the currentQuestion count
// Increment the currentQuestion count
// Show the next question at that currentQuestion






// NHO: reminder to remove all unused code / comments

// console.log(answer)
// // console.log(questionNumber);
// console.log(userGuess);

// does user guess = answer?
// if it does what should happen? - add 1 to score
// otherwise do nothing





// compare what the user guessed with the answer to that question








// if the answer is the same, add 1 to the score

// otherwise, do nothing





// Need to create a function to score the game
