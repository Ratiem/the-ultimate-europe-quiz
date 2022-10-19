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

}

function displayQuestion() {

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