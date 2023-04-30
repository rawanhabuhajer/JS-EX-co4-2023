
let start=1
while (start=1){
    let play= confirm ("shall we play rock,paper or scissors ?")
    if (play) {
        let game = prompt ("Enter your choise ?")
        if (game) {
            let player1 = game;
        let computer = ["rock", "paper", "scissors"];
        
        const randomElement = computer[Math.floor(Math.random() *3)];
         
        
         
        
        if (player1 === "rock" && randomElement ==="paper"){
           alert (`computer win \n the player choise is ${player1} \n the computer choise is ${randomElement} ` );
        }
        else if ( player1 === "paper" &&  randomElement ==="rock"){
            alert  (`player1 win  \n the player choise is ${player1} \n the computer choise is ${randomElement}`);   
        }
        else if ( player1 === "paper" && randomElement ==="scissors"){
            alert (`computer win \n the player choise is ${player1} \n the computer choise is ${randomElement}`);
            
        }
        else if ( player1 === "scissors" && randomElement ==="paper"){
            alert  (`player1 win \n the player choise is ${player1} \n the computer choise is ${randomElement}`);
            
        }
        else if ( player1 === "rock" && randomElement ==="scissors"){
            alert  (`player1 win \n the player choise is ${player1} \n the computer choise is ${randomElement}`);
            
        }
        else if ( player1 === "scissors" && randomElement ==="rock"){
            alert  (`computer win \n the player choise is ${player1} \n the computer choise is ${randomElement}`);
            
        }
        
        else {
            alert(`Tie game \n the player choise is ${player1} \n the computer choise is ${randomElement}`);
            
        }
         
        
        }
        else {
            alert("I guess you chaged your mind")
        }
     
    } 
    else{
        alert("ok, maybe next time")
    }
    
}

