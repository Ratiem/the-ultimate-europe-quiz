/*Event listeners*/

 startButton.addEventListener("click",function() {
  runGame();
  myinterval=setInterval(countdown,1000);
});


rulesButton.addEventListener("click",rules);


 nextButton.addEventListener("click",function() {
    nextQuestion();
    myinterval=setInterval(countdown,1000);
  });


/*Content displayed when the rules button is clicked*/

function rules() { 
    introArea.innerHTML =
    `<h3>Rules</h3>
    <ol id="rules">
        <li>There are 12 questions</li>
        <li>there is one possible answer, click one of the two possible answers</li>
        <li>You will earn one poiint for each correct answer</li>
        <li>Click next to proceed after each question</li>

        </ol>`;
        rulesButoon.classList.add("hide")
    }






/**
 * When the Start Quiz button is pressed, the game area appears.
 * The first question is called.
 */

function runGame() {
   startButton.claaList.add("hide");
   rulesButton.classList.add("hide");
   introArea.classList.add("hide");
   questionArea.classList.add("hide");
   nextButton.classList.add("hide");
   logoImg.classList.add("hide");
   currentQuestionIndex=[0];
   console.log("Started")
   questionTitle.innerText=`Question${questionCounter}of ${maxQuestion}`;
}

/*Function to show when the quiz question is displayed and the 2 possible 
*answers for the questions.*/

function displayQuestion(currentQuestion) {
questionElement.innerText=currentQuestion.question;
answerOne.innerText=currentQuestion.answer1;
answerTwo.innerText=currentQuestion.answer2;

answerOne.addEventListener("click",checkAnswer);
answerTwo.addEventListener("click",checkAnswer);
}

function nextQuestion() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}