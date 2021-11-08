let playerOneTurn = true;
let winner;
let round;

const tic_tac_toe = {  

    init: function (){
        this.createGameBoard();
        restartButton.addEventListener('click', this.createGameBoard);
        console.log(winnerDeclared);
    },

    // creating the gameboard
    createGameBoard: function() { 
        round=0;
        document.getElementById('currentPlayerTurn').innerText="Player 1's Turn"; 
        gameBoard.innerHTML = "";  
        document.getElementById('winnerDeclared').className = "hidden";
        playerOneTurn=true;
        for (let index = 0; index < 9; index++) {
                var gameBoardBox = document.createElement('div');
                gameBoardBox.id = "box"+ index;
                gameBoardBox.className = "notUsed"+index;
                gameBoardBox.addEventListener('click', tic_tac_toe.playerTurn);
                gameBoard.appendChild(gameBoardBox);   
            }
        },
    
    playerTurn: function(){
        tic_tac_toe.currentPlayerTurn();
        if (this.className == 'player1'||this.className=='player2'){
            return;
        }
        if (playerOneTurn==true){
            var img = document.createElement('img');
            img.src = 'x.png';
            this.appendChild(img);
            this.className = ('player1');
            playerOneTurn=false;
            console.log(this);
            round++;
            } else if (playerOneTurn==false) {
            var img = document.createElement('img');
            img.src = 'o.png';
            this.appendChild(img);
            playerOneTurn=true;
            this.className = ('player2');
            round++;
            } 
        tic_tac_toe.checkWinner();
    },

    checkWinner: function () {
        
        if (box0.className == box1.className && box1.className == box2.className){
            winner = box0.className;
            tic_tac_toe.announceWinner(); 
            return;
        } 
        if (box3.className == box4.className && box4.className == box5.className){
            winner = box3.className;
            tic_tac_toe.announceWinner();
            return;
        } 
        if (box6.className == box7.className && box7.className == box8.className){
            winner = box6.className;
            tic_tac_toe.announceWinner();
            return;
        } 
        if (box0.className == box3.className && box3.className == box6.className){
            winner = box0.className;
            tic_tac_toe.announceWinner();  
            return;
        } 
        if (box1.className == box4.className && box4.className == box7.className){
            winner = box1.className;
            tic_tac_toe.announceWinner();
            return;
        } 
        if (box2.className == box5.className && box5.className == box8.className){
            winner = box2.className;
            tic_tac_toe.announceWinner(); 
            return;
        } 
        if (box0.className == box4.className && box4.className == box8.className){
            winner = box0.className;
            tic_tac_toe.announceWinner(); 
            return;
        }  
        if (box2.className == box4.className && box4.className == box6.className){
            winner = box2.className;
            tic_tac_toe.announceWinner(); 
            return;
        }
        if (round==9) {
            tic_tac_toe.checkForTie();
        }
    },

    announceWinner: function (){
        if (winner == "player1") {
            winnerAnnouncementText.innerText = "Player 1 (X's) Did it!";
            document.getElementById('winnerDeclared').className -= "hidden";
            console.log(winnerDeclared);
            document.getElementById('winnerDeclared').className = "winnerDeclared";
        } 
        if (winner == "player2"){
            winnerAnnouncementText.innerText = "Player 2 (O's) Did it!";
            document.getElementById('winnerDeclared').className -= "hidden";
            document.getElementById('winnerDeclared').className = "winnerDeclared";
        }
    },

    currentPlayerTurn: function(){
        console.log('change text');
        if (playerOneTurn == false) {
            document.getElementById('currentPlayerTurn').innerText="Player 1's Turn";
            x=true;
        } else {
            document.getElementById('currentPlayerTurn').innerText="Player 2's Turn";
            x=false;
        }
    },

    checkForTie: function () {
        winnerAnnouncementText.innerText = "You Tied";
        document.getElementById('winnerDeclared').className -= "hidden";
        document.getElementById('winnerDeclared').className = "winnerDeclared";
    }

}

tic_tac_toe.init();