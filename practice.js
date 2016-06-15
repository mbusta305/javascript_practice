var questions = 3;
var questionsLeft = ' [' + questions + ' questions left]';
var adjective = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var verb = prompt('Please type a verb' + questionsLeft );
questions -=1;
questionsLeft = ' [' + questions + ' questions left]';
var noun = prompt('Please type a noun' + questionsLeft);
alert('All done. Ready for the message?');
var sentence = "<h2>There once was a " + adjective;
sentence += ' programmer who wanted to use JavaScript to ' + verb;
sentence += ' the ' + noun + '.</h2>';
document.write(sentence);
console.log("Program ends here")



// this returns a random number between 1...5
Math.floor (Math.random() * 6 )

// this returns a random number between 1-6
Math.floor (Math.random() * 6 ) + 1

// this creates a random roll of the dice between 1-6
var diceRoll = Math.floor( Math.random() * 6) + 1;
// alerts what number was rolled.
alert("you rolled a " + diceRoll);


// this ask the user for a number then returns a random number
// between 1 and the number given by the user.
var input = prompt("please give me a number");
var topNumber = parseInt(input);
var randomNumber = Math.floor(Math.random() * topNumber) + 1;
var message = "<p>" + randomNumber + " is a number between 1 and " + topNumber + ".</p>";
document.write(message);


// if else conditional statements
var answer = prompt('What programming language is the name of the gem?');
if ( answer.toUpperCase() === 'RUBY' ) {
  document.write("<p>That's right!</p");
} else {
  document.write("<p>That's wrong!</p");
 }


// prompts the user to guess a number between 1 and 6 and returns
// a different message depending if you answered correct
 var randomNumber = Math.floor(Math.random() * 6) + 1;
 var guess = prompt('I am thinking of a number between 1 and 6. What is it?')
 if (parseInt(guess)=== randomNumber) {
   document.write('<p>You guessed right!</p>')
 } else {
   document.write('<p>Sorry, the number was ' + randomNumber + '</p>');
 }
