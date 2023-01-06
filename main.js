const choices = ['scissors', 'paper', 'brick']
const winners = [];

function game() {
    for (let i = 0; i <= 4; i++) {
        playRound(i);
    }
    logWins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
    let input = prompt("Pick Scissors, Paper, or Brick");
    while (input == null) {
        input = prompt("Pick Scissors, Paper, or Brick");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt(
            "Type Scissors, Paper, or Brick, Check spelling!"
        );
        while (input == null) {
            input = prompt("Pick Scissors, Paper, or Brick");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
    if (choice.includes(choice));
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "Tie";
    } else if (
        (choiceP === "brick" && choiceC === "scissors") ||
        (choiceP === "paper" && choiceC === "brick") ||
        (choiceP === "scissors" && choiceC === "paper")
    ) {
        return "Player Wins";
    } else {
        return "Computer Wins";
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player Wins").length;
    let computerWins = winners.filter((item) => item == "Computer Wins").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log("Round:", round);
    console.log("Player chose:", playerChoice);
    console.log("Computer chose:", computerChoice);
    console.log(winner, "Won the Round");
    console.log("---------------------------------");
}
game();