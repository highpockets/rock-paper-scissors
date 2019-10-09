const gameArea = document.querySelector('#gameArea');

const gameAreaContents = document.createElement('div');
gameAreaContents.classList.add('gameAreaContents');

gameArea.appendChild(gameAreaContents);

const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'ROCK  PAPER  SCISSORS';

gameAreaContents.appendChild(title);

const howToPlay = document.createElement('h2');
howToPlay.classList.add('howToPlay');
howToPlay.textContent = 'Click any button below to play';

gameAreaContents.appendChild(howToPlay);

const buttons = document.createElement('div');
buttons.classList.add('buttons');

gameAreaContents.appendChild(buttons);

const rockButton = document.createElement('button');
rockButton.classList.add('rockButton');
rockButton.textContent = 'ROCK';

const paperButton = document.createElement('button');
paperButton.classList.add('paperButton');
paperButton.textContent = 'PAPER';

const scissorsButton = document.createElement('button');
scissorsButton.classList.add('scissorsButton');
scissorsButton.textContent = 'SCISSORS';

buttons.appendChild(rockButton);
buttons.appendChild(paperButton);
buttons.appendChild(scissorsButton);

let playerWins = 0;
let computerWins = 0;

const playerScore = document.createElement('h2');
playerScore.classList.add('playerScore');
playerScore.textContent = 'You = ' + playerWins;

const computerScore = document.createElement('h2');
computerScore.classList.add('computerScore');
computerScore.textContent = 'Computer = ' + computerWins;

gameAreaContents.appendChild(playerScore);
gameAreaContents.appendChild(computerScore);

const resultText = document.createElement("h1");
resultText.classList.add("resultText");
resultText.textContent = "Step Right Up and Give it Your Best Shot!";

gameArea.appendChild(resultText);

let playerSelection;
let computerSelection;

rockButton.addEventListener('click', function(e){
    playerSelection = 'Rock';
    Game();
});
paperButton.addEventListener('click', function(e){
    playerSelection = 'Paper';
    Game();
});
scissorsButton.addEventListener('click', function(e){
    playerSelection = 'Scissors';
    Game();
});

function Game()
{
    PlayerInputCleanup();
    computerSelection = ComputerPlay();
    PlayRound(playerSelection, computerSelection);
    
    if(playerWins === 5)
    {
        let result = document.getElementsByClassName('resultText');
        result[0].innerHTML = "You Win " + playerWins + " To " + computerWins;
        computerWins = 0;
        playerWins = 0;
        ScoreReset("Player");
    }
    else if(computerWins === 5)
    {
        let result = document.getElementsByClassName('resultText');
        result[0].innerHTML = "Computer Wins " + computerWins + " To " + playerWins;
        computerWins = 0;
        playerWins = 0;
        ScoreReset("Computer");
    }
}
function ScoreReset(winner)
{
    alert(winner + " Wins!! Do You Want To Reset?");
    let newScore = document.getElementsByClassName('computerScore');
    newScore[0].innerHTML = "Computer = " + computerWins;
    newScore = document.getElementsByClassName('playerScore');
    newScore[0].innerHTML = "You = " + playerWins;
}
function PlayerInputCleanup()
{
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    playerSelection = playerSelection.trim();
}
function ComputerPlay()
{
    return RandomItemSelection(3);
}
function PlayRound(playerSelection, computerSelection)
{
    if(playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissors")
    {
        if(playerSelection != computerSelection)
        {
            switch(playerSelection)
            {
                case "Rock":
                return WhoWins("Paper");

                case "Paper":
                return WhoWins("Scissors");

                case "Scissors":
                return WhoWins("Rock");
            }
        }
        else
        {
            let result = document.getElementsByClassName('resultText');
            result[0].innerHTML = "It's a Tie!! You Both Chose " + playerSelection;
        }
    }
    else
    {
        alert("OOPS!! You can only choose Rock, Paper or Scissors..");
    }
}
function RandomItemSelection(quantityOfItems)
{
    let itemNum = Math.floor(Math.random() * Math.floor(quantityOfItems));
    
    switch(itemNum)
    {
        case 0:
        return "Rock";

        case 1:
        return "Paper"

        case 2:
        return "Scissors";
    }
}
function WhoWins(itemToTest)
{
    if(computerSelection == itemToTest)
    {
        computerWins = computerWins + 1;
        let newScore = document.getElementsByClassName('computerScore');
        newScore[0].innerHTML = "Computer = " + computerWins;
        let result = document.getElementsByClassName('resultText');
        result[0].innerHTML = "Opps!! One for the Computer!!";
    }
    else
    {
        playerWins = playerWins + 1;
        let newScore = document.getElementsByClassName('playerScore');
        newScore[0].innerHTML = "You = " + playerWins;
        let result = document.getElementsByClassName('resultText');
        result[0].innerHTML = "Ya!! One for You!!";
    }
}