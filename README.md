# Rock-Paper-Scissors

Original Instructions:

For this project, we will create the game Rock Paper Scissors. This game will be played entirely in the console.

It’s best practice to link to an external JavaScript file inside this script tag. 

Using an external JavaScript file keeps your HTML file clean and organized.

You don’t have to write additional code in the HTML file. This game is played entirely via the console.

Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

Your game will be played by a human player. You will write a function that takes the user choice and returns it.

Your game will keep track of the players score. You will write variables to keep track of the players score.

Your game will be played round by round. 

You will write a function that takes the human and computer player choices as arguments, plays a single round, 
increments the round winner’s score and logs a winner announcement.

Your game will play 5 rounds. 

When making interactive projects, like this one, you might be tempted to add more features, 
improve interactivity, user experience, design and styling of your website, and so on.

We recommend not doing that, and saving this effort for your portfolio projects.


Updated Instructions:

- In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

- For now, remove the logic that plays exactly five rounds.

- Create three buttons, one for each selection.
  
- Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked.
  (you can keep the console.logs for this step)
  
- Add a div for displaying results and change all of your console.logs into DOM methods.

- Display the running score, and announce a winner of the game once one player reaches 5 points.
  
- You will likely have to refactor (rework/rewrite) your original code to make it work for this.
