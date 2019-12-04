const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    const startGame = ()=> {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        })
    }
    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        //Computer Options
        const computerOptions = ["rock", "paper", "scissors"];
        options.forEach(option => {
            option.addEventListener("click", function(){
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoise = computerOptions[computerNumber];
                //to compare 
                compareHands(this.textContent, computerChoise);
                //Update Images
                playerHand.src=`./assets/${this.textContent}.jpg`;
                computerHand.src = `./assets/${computerChoise}.jpg`;
                
            });
        });
        
    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
    const compareHands = (playerChoise, computerChoise) => {
        //Update Text
        const winner = document.querySelector('.winner');
        //Checking for a tie
        if(playerChoise === computerChoise){
            winner.textContent = "It is a tie";
            return;
        }
        //Check for Rock
        if(playerChoise === "rock"){
            if(computerChoise === "scissors"){
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }
        //Check for Paper
        if(playerChoise === "paper"){
            if(computerChoise === "scissors"){
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
         //Check for Scissors
         if(playerChoise === "scissors"){
            if(computerChoise === "rock"){
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
    }
    //call all the inner function
    startGame();
    playMatch();
    

}

//start the game function
game();