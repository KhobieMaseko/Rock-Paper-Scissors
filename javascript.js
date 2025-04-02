// script for the main page

// 3. Declare the players score variables
let humanScore = 0;
let computerScore = 0;

// 1. logic to get the computer choice
// getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3); // Generates 0, 1, or 2

    if (randomNum === 0)
    {
        return "rock";
    }
    else if (randomNum === 1)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

// 2. logic to get the human choice
// function that takes the user choice and returns it.
// For now, just assume the user will always enter a valid choice.

function getHumanChoice() {
    return prompt("Choose rock, paper, or scissors:").toLowerCase();
}



// 4. logic to play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors")
    {
        humanScore++;
        return "You win! Rock beats scissors.";
    }
    else if (humanChoice === "paper" && computerChoice === "rock")
    {
        humanScore++;
        return "You win! Paper beats rock.";
    }
    else if (humanChoice === "scissors" && computerChoice === "paper")
    {
        humanScore++;
        return "You win! Scissors beats paper.";
    }
    else
    {
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice + ".";
    }
}

// 5. logic to play the entire game for five rounds
function playGame() {
    for (let i = 0; i < 5; i++)
    {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }
    console.log("Final score || You: " + humanScore + " || " + "Computer: " + computerScore);
}

// 6. Call playGame function to start the game
playGame();
