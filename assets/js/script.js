//Wait for the DOm to finish loading before running the game
//Get the button elements and add event listeners to them
//decalre global variable
let maxQuestion = 12;
let questionCounter = 0;
//let myInterval = null;
/*Event listeners*/

let startButton = document.getElementById("start-button");

startButton.addEventListener("click", function () {
    runGame();
    //myInterval = setInterval(countdwon, 1000);
});

let rulesButton = document.getElementById("rules-button");

rulesButton.addEventListener("click", rules);

let nextButton = document.getElementById("next-button");

nextButton.addEventListener("click", function () {
    nextQuestion();

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
    rulesButton.classList.add("hide");

}


/**
 * When the Start Quiz button is pressed, the game area appears.
 * The first question is called.
 */

function runGame(questionCounter,maxQuestion) {

    let introArea = document.getElementById("intro-area");
    let questionArea = document.getElementById("question-area");
    let questionTitle = document.getElementById("question-title");

    console.log("started");
    startButton.classList.add("hide");
    rulesButton.classList.add("hide");
    introArea.classList.add("hide");
    questionArea.classList.add("hide");
    nextButton.classList.add("hide");
    questionCounter = 0;

    questionTitle.innerText = `Question ${questionCounter} of ${maxQuestion}`;

    displayQuestion(questionCounter)
}

/*Function to show when the quiz question is displayed and the 2 possible 
 *answers for the questions.*/

function displayQuestion(currentQuestion) {

    questionElement.innerText = currentQuestion.question;
    answerOne.innerText = currentQuestion.answer1;
    answerTwo.innerText = currentQuestion.answer2;

    answerOne.addEventListener("click", checkAnswer);
    answerTwo.addEventListener("click", checkAnswer);
}

/**The nextQuestion function is called when the next button is clicked
 * A new question is loaded after each click and removes the current question.
 */
function nextQuestion(questioncounter,maxQuestion,myInterval) {
    let removedQuestion = [];

    console.log("Generating next question...");
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.remove("btn-correct");
        answerButtons[i].classList.remove("btn-wrong");
    }
    removedQuestion.push(...question.splice(0, 1));
    //questioncounter = 0;
    if (questioncounter === maxQuestion) {
        endGame();
       // clearInterval(myInterval);
    }
}

/*This function checks the correct answer when chosen byt he user from teh questions and highlights the answer
 *in green while the wrong ansers in highlighted in red. 
 *After completing the question displayed the next button is then deisplayed for the user to move onto to the next question.
 */

function checkAnswer(currentQuestion,myInterval) {

    let answerButtons = document.getElementById("answer1");

    console.log("Checking answer");
    //clearInterval(myinterval);
    console.log(question[0].correct);
    if (this.innerHTML === question[0].correct) {
        this.classList.add("btn-correct");
        console.log("correct!");
        incremetnScore(scorePoints);
    } else {
        this.classList.add("btn-wrong");
        console.log("Wrong!");
        for (let i = 0; i < answerButtons.length; i++) {
            if (answerButtons[i].innerHTML === question[0].correct) {
                answerButtons[i].classList.add("btn-correct");
            }
        }
    }
    if (answerButtons.length === (currentQuestion +1)) {
        nextButton.innerHTML = "End";
    }
    nextButton.classList.remove("hide");

    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].removeEventListener("click", CheckAnswer(i));
    }
}

/**
 * Check the score and increments it by 1 each time the user gets a correct answer.
 */

function incrementScore() {

    let score = 0;
    let scoreText = document.getElementById("score");
    let correctAnswerCounter = 0;

    const scorePoints = 10

    correctAnswerCounter++;
    score = (corectAnswerCounter * scorePoints);
    scoreText.innerText = score;
    console.log("Adding points");
    console.log("Your Total Score is" + correctAnswerCounter);
}

function endGame(myInterval) {
    console.log("Calculating total score...");
    //clearInterval(myInterval);
    questionArea.classList.add("hide");
    endofGameArea.classList.remove("hide");
    finalScoreText.innerHTML = `Congratulations you completed the quiz!Your total socre is:${finalscore}.`;
    if (correctAsnwercounter <= 7) {
        finalScoreText.innerHTML = `Awww...You only scored${finalscore}. Don't worry, better luck next time!`
    }
}

//List of Questions for the Quiz

let questions = [{
        question: "Europe is the most densely populated continent?",
        answer1: "True",
        answer2: "False",
        Correct: "True",
    },
    {
        question: "10% of the world population lives in Europe?",
        answer1: "True",
        answer2: "False",
        Correct: "True",
    },
    {
        question: "Amsterdam, The Netherlands is the largest container port in Europe?",
        answer1: "True",
        answer2: "False",
        Correct: "False",
    },
    {
        question: "Barcelona is the capital city of Spain?",
        answer1: "True",
        answer2: "False",
        Correct: "False",
    },
    {
        question: "Buda Castle is located in Prague?",
        answer1: "True",
        answer2: "False",
        Correct: "False",
    },
    {
        question: "Istanbul, Turkey is the most populous city in Europe?",
        answer1: "True",
        answer2: "False",
        Correct: "True",
    },
    {
        question: "24 countries are part of the European Union?",
        answer1: "True",
        answer2: "False",
        Correct: "False",
    },
    {
        question: "You can find the EU headquarters in Berlin, Germany?",
        answer1: "True",
        answer2: "False",
        Correct: "False",
    },
    {
        question: "Lisbon is the capital of Portugal?",
        answer1: "True",
        answer2: "False",
        Correct: "True",
    },
    {
        question: "If you are flying to Charles de Gaulle, you are flying to Rome, Italy?",
        answer1: "True",
        answer2: "False",
        Correct: "False",
    },
    {
        question: "The busiest airport in Germany is Frankfurt Airport?",
        answer1: "True",
        answer2: "False",
        Correct: "True",
    },
    {
        question: "The Euro was invented in the year 2000?",
        answer1: "True",
        answer2: "False",
        Correct: "False",
    },
];