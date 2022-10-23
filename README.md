# The Ultimate Europe quiz

The Ultimate Europe Quiz is a fun interesting quiz aimed at testing the user on their general knowledge of the European Countries in travel and geography. This Simple trivia game is perfect for any get together event as friends or even a simple trivia night. 

The idea of the project was inspired by my love for Europe and travel. From a young age I have always had a passion for travel after being introduced to the beauty of travel by my parents at a young age. After my first Europe experience I never looked back. I found the questions to be a fun quiz for myself as well to test how much of Europe knowledge I have gathered since my first experience and the idea is that the user enjoys the game as much as l did and is inspired to explore the beauty of Europe one day.

The content of the quiz is designed for all ages. There are no age restrictions. The website is responsive in all major screen devices that is desktop, laptop, tablet and smartphone.

![Responsive Mockup](https://github.com/Ratiem/the-ultimate-europe-quiz/blob/main/assets/images/Responsiveness.png)

# Features 

## Home page

On this page you will find the main title and a brief introduction to the quiz. The home page also contains the logo image of Country signs, the start quiz button and rules button.

![Homepage](https://github.com/Ratiem/the-ultimate-europe-quiz/blob/main/assets/images/landing-page.png)

## Rules page

The rules are found on the home page( landing page of the quiz). And these are set to give the user some guidance on how to play the quiz. Once the user has finished reading the rules they will be guided to the start quiz button. The rules will then disappear when the user proceeds to click the start quiz button.

![Rulespage](https://github.com/Ratiem/the-ultimate-europe-quiz/blob/main/assets/images/rules-page.png)

## Quiz page

In this section, after selecting the start quiz button, the user will be directed to the very first question which like all questions to follow will always have two options to choose from(true of false). On the quiz page the user will only see the question, the answer options, the score and the next button which should be clicked after the user has selected the correct answer so as to proceed to the next question.

For each question that the user will be working on they will know what number it is as this will be displayed at the top of the game area. There are 12 questions to answer. The correct answer option turns green when clicked while if the answer is wrong the button turns red. 

![Quizpage](https://github.com/Ratiem/the-ultimate-europe-quiz/blob/main/assets/images/quiz-page.png)

## End Page
At the end of the answering the 12 questions, the game is over and the user will be taken to the final page of the game. The user will get a congratulations message for completing the game. 

There is no restart button for the player to play the quiz again. The game will marked as over.

![Endpage](https://github.com/Ratiem/the-ultimate-europe-quiz/blob/main/assets/images/end-page.png)

## Future Features

In future I could possibly add:
- An option to replay again with possibly a set of new questions.
- Timer element to make it more fun.


## Design Choices

### Color
I used simple color choices for both the background and the quiz area. 

### Fonts
I was drawn to the combination of Ubuntu and Opens sans. A very soft combination and easy on the eyes.
I was immediately drawn to the font Ubuntu and found the perfect pairing for this font on https://www.pagecloud.com/blog/best-google-fonts-pairings


### Structure
The website has 3 main pages being:
- The Home page which diplays the Intro area. On this page you will find the start quiz and rules button.
- The Quiz area which displays all the 12 questions one at a time and answer options. At the bottom of this page we also see the score and next button. This page contains the next button and score level.
- The final page is the end of the game page which will show the user a closing message.

# Technologies Used

Languages
- HTML
- CSS
- JavaScript

Framework & Tools
I used the following technologies to create this website:
- Balsamiq - for my initial testing phase of the layout of the quiz 
- HTML 5- for structure
- CSS- for styling
- Javascript - for all the game variables and functions
- Gitpod - for the Website creation and deployment
- Github - for the final Website hosting
- The fonts were taken from https://fonts.google.com/ and the inspiration behind the combination of the fonts was taken from https://www.pagecloud.com/blog/best-google-fonts-pairings
- [Favicon] (https://favicon.io/favicon-generator/)
- google Chrome Developer tools
- Google fonts
- Font Awesome
- Code Insitute Student template
- Am l responsive
- W3C Markup Validation Service
- Jigsaw CSS Validation Service
- JSHint JavaScript Code Quality Tool


## Testing 

The Media responsive elements were built directly in the CSS. The wesbite is responisve across all media ie Laptops, desktops, tablets and smartphones.

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator]
  ![HTMLtesting](https://github.com/Ratiem/the-ultimate-europe-quiz/blob/main/assets/images/html-testing%20-page.png)

- CSS
  - No errors were found when passing through the official [(Jigsaw) validator]
  ![CSStesting](https://github.com/Ratiem/the-ultimate-europe-quiz/blob/main/assets/images/css-testing-page.png)
  
- JS Validation
  JSHint was used to check validity of the JavaScript code used for the website and no warnings were found.
  3 unused variables were found in the list of variables, however these varibales have been declared in the functions
  -
- LightHouse Report Viewer
 ![Lighthouse](https://github.com/Ratiem/the-ultimate-europe-quiz/blob/main/assets/images/lighthouse-testing.png)

### Bugs to be fixed

| **Bug** | **Attempted Fixes**| **Result** | 
|-------------|------------|------------|
|During the final check of the quiz functionality I noticed that the answer buttons allow the use to click twice meaning in all 12 questions the user can click twice instead of once for each question which was the initial plan.|Changed the check answer function to look for button classed (button.classList.add) after one answer option assigned by user. |Answers still allow user to click twice instead of once. 


## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the "Settings" tab 
  - Once in the setting, navigate to "Pages" from the left hand menu;
  - In the "Branch" section, from the drop-down menu, select "main" and click on Save;
  - Refresh the page manually. The link to the now deployed website and will display to indicate the successful deployment. 

The live link can be found here - https://ratiem.github.io/the-ultimate-europe-quiz/ 

In order to fork this repository, you must:
- Go to the Github repository.
- Click on the "fork Button" at the top right hand corner of the page.
- Then select "create new fork' from the menu provided.

You can clone this repository by:
- Going to the Github repository, click on the code button located above the file list.
- Select if you prefer to clone using either HTTPS, SSH, or Github CLI.
- Click on the copy button to copy the URL to your clipboard.
- Open Git Bash.
- Change the current working directory to the one where you want to clone the directory to.
- Type "git clone" and then paste the copied URL from Github.
- Press enter to cleate your local clone.


## Credits 

### Content 

- The text for the Quiz questions were taken from https://www.beelovedcity.com/
- Instructions on how to make my page responsive were taken from Youtube video https://css-tricks.com/a-complete-guide-to-css-media-queries/ https://css-tricks.com/snippets/css/media-queries-for-standard-devices/ 
- The Favicon in the browser was created using https://favicon.io/favicon-generator/

### Media

- One image was used in this project for the logo and it was sourced from:
   *https://www.freepik.com/free-vector/countries-signs_762270.htm#query=country%20signs&position=4&from_view=search&track=sph
- I used a one background colour to keep the project simple and clean, without obscuring the main quiz area. 


# Acknowledgements

- First of all i would like to thank my daugther as she helped provide support during this time. My family in  general for the unwavering support throughout my program so far. 
- I would also like to acknowledge the slack community for always trying their best to guide us through challenging tasks. 
- My fellow Students Jeffrey Bull for helping review my code in peer code review.
- I would also like to thank my fellow Code Insitute student Kelly Hutchison. Her excellent code work was the basis for my project.
- My friend George Ngcobo who is a former collegue. George is currently a software developer and helped tutor me through the final steps in trying to identify where my code required fixing particularly in javascript. He also helped debug my code. I was challenged to think more and read through more online resources such as stackoverflow.com and search through related videos on youtube.
- Finally I would like to thank my Mentor Caleb Mbakwe for the continued support


