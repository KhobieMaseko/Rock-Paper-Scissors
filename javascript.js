// Rock, Paper, Scissors script file

// Game state
let humanScore = 0;
let computerScore = 0;
const winningScore = 5;

// Get DOM elements
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');

// Returns random computer choice
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) return "rock";
    if (randomNum === 1) return "paper";
    return "scissors";
}

// Plays one round and updates game state
function playRound(humanChoice) {
    // Don't continue if game is already won
    if (humanScore >= winningScore || computerScore >= winningScore) return;

    const computerChoice = getComputerChoice();
    let result;

    // Determine winner and update scores
    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        result = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        result = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    // Update UI
    resultsDiv.textContent = result;
    scoreDiv.textContent = `Score : You ${humanScore} | Computer ${computerScore} `;

    // Check for game winner
    if (humanScore >= winningScore) {
        resultsDiv.textContent = "Congratulations! You won the game! 🏆";
    } else if (computerScore >= winningScore) {
        resultsDiv.textContent = "Game over! Computer won the game! 😢";
    }
}

// Button event listeners
rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));
