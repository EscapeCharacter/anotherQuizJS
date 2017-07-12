var questions = [
  ['How many states are in the United States?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var questionsYouGotRight = [];
var questionsYouGotWrong = [];

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for (var i = 0; i < questions.length; i++) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers++;
    questionsYouGotRight.push(question);
  } else if(response !== answer) {
    questionsYouGotWrong.push(question);
  }
}

html = "You got " + correctAnswers + " question(s) right.<br>";
html += '<strong>You got these questions correct: </strong>';
html += '<ol>';
for (var i = 0; i < questionsYouGotRight.length; i++){
  html += '<li>' + questionsYouGotRight[i] + '</li>';
}
html += '</ol>';
html += '<strong>You got these questions wrong: </strong>';
html += '<ol>';
for (var i = 0; i < questionsYouGotWrong.length; i++){
  html += '<li>' + questionsYouGotWrong[i] + '</li>';
}
html += '</ol>';
print(html);
