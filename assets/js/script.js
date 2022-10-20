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

/**The nextQuestion function is called when the next button is clicked
 * A new question is loaded after each click and removes the current question.
 */
function nextQuestion() {
    console.log("Generating next question...");
for(let i=0; i<answerButtons.length; i++) {
    answerButtons[i].classList.remove("btn-correct")
    answerButtons[i].classList.remove("btn-wrong")
}
    removedQuestion.push(...question.splice(0,1));
    counter=0;
if(questioncounter === 12) {
    endGame();
    clearInterval(myInterval);
}
}

/*this function checks the correct answer when chosen byt he user from teh questions and highlights the answer
*in green while the wrong ansers in highlighted in red. 
*After completing the question displayed the next button is is then deisplayed for the user to move onto to the next question.
*/

function checkAnswer() {
   console.log("Checking answer");
   clearInterval(myinterval);
   console.log(question[0].correct);
if(this.innerHTML === question[0].correct) {
    this.classList.add("btn-correct");
    console.log("correct!");
    incremetnScore(scorePoints);
    } else {
        this.classList.add("btn-wrong");
        console.log("Wrong!");
        for(let i=0;i<answerButtons.length;i++) {
            if (answerButtons[i].innerHTML === question[0].correct) {
                answerButtons[i].classList.add("btn-correct")
            }
        }
    }
    if(questionCounter === 12) {
        nextButton.innerHTML ="End";
    }
    nextButton.classList.remove("hide");

    for(leti=0;i<answerButtons.length;i++) {
        answerButtons[i].removeEventListener("click",CheckAnswer);
    }
}

function incrementScore() {

}

function endGame() {
    
}

//List of Questions for the Quiz

let questions=[
   {
    question:"Europe is the most densely populated continent?",
    answer1:"True",
    answer2:"False",
    Correct:"True",
   },
   {
    question:"10% of the world population lives in Europe?",
    answer1:"True",
    answer2:"False",
    Correct:"True",
   },
   {
    question:"Amsterdam, The Netherlands is the largest container port in Europe?",
    answer1:"True",
    answer2:"False",
    Correct:"False",
   },
   {
    question:"Barcelona is the capital city of Spain?",
    answer1:"True",
    answer2:"False",
    Correct:"False",
   },
   {
    question:"Buda Castle is located in Prague?",
    answer1:"True",
    answer2:"False",
    Correct:"False",
   },
   {
    question:"Istanbul, Turkey is the most populous city in Europe?",
    answer1:"True",
    answer2:"False",
    Correct:"True",
   },
   {
    question:"24 countries are part of the European Union?",
    answer1:"True",
    answer2:"False",
    Correct:"False",
   },
   {
    question:"You can find the EU headquarters in Berlin, Germany?",
    answer1:"True",
    answer2:"False",
    Correct:"False",
   },
   {
    question:"Lisbon is the capital of Portugal?",
    answer1:"True",
    answer2:"False",
    Correct:"True",
   },
   {
    question:"If you are flying to Charles de Gaulle, you are flying to Rome, Italy?",
    answer1:"True",
    answer2:"False",
    Correct:"False",
   },
   {
    question:"The busiest airport in Germany is Frankfurt Airport?",
    answer1:"True",
    answer2:"False",
    Correct:"True",
   },
   {
    question:"The Euro was invented in the year 2000?",
    answer1:"True",
    answer2:"False",
    Correct:"False",
   },
];