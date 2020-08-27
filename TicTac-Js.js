let winner;
let turn;
let first=0;
let second=0;

function startGame(){
    turn = "X";
    winnet = false;
    setMessage("Get's to start.")
}

function setMessage(msg){
    document.getElementById("message").innerText = msg;
}

function nextStep(sq){
    if(winner){
        
    }
    else if(sq.innerText ==="")
    {
        sq.innerText = turn;
        if(checkWinner(turn))
        {
            winner = true;
            if(turn =="X"){
               setMessage("First player Win !")
               first++;
           }
            else {
                setMessage("Second player Win !")    
                second++;
            }
        }
        else if(turn =="X")
        {
            turn = "O";
            setMessage("Second player's turn")
        }
        else{
            turn = "X";
            setMessage("First player's turn")
        }
    }
    else 
        setMessage("it's square used");
}

function checkWinner(check){
    if (checkRow(1,2,3,check) ||
        checkRow(4,5,6,check) ||
        checkRow(7,8,9,check) ||
        checkRow(1,4,7,check) ||
        checkRow(2,5,8,check) ||
        checkRow(3,6,9,check) ||
        checkRow(1,5,9,check) ||
        checkRow(3,5,7,check))
        {
            return true;
        }
    return false;
}

function checkRow(x, y, z, check){
    if (getCheck(x)==check && getCheck(y)==check && getCheck(z)==check) 
    {
        return true;
    }
    return false;
}

function getCheck(number){
    return document.getElementById("n" + number).innerText;
}

function update(){
    setMessage("Get's to start.")
    for(let i=1;i<10;i++){
        document.getElementById("n" + i).innerText = "";
    }
    winner = false;
    turn = "X";
}

function history(){
    alert ("First player: " + first + " points,  Second player: " + second + " points");
}