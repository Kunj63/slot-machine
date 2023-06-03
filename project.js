const prompt =  require("prompt-sync")();

//1.this block is for deposit money
const deposit = () => {
    while(true){
    const depositAmount = prompt("Enter deposit amount: ")
    const depositNumberAmount = parseFloat(depositAmount);
    if (isNaN(depositNumberAmount) || depositNumberAmount <= 0) {
        console.log("Invalid Amount Entered.Please Try Again!")
    } else {
        return depositNumberAmount;
    }
}
};


//2.this block is for number of lines on bet
const numberOfLines = () => {
    while(true){
    const lines = prompt("Enter number of lines(1-3): ")
    const linesNumber = parseInt(lines);
    if (isNaN(linesNumber) || linesNumber <= 0 || linesNumber>3 )  {
        console.log("Invalid Number of lines Entered.Please Try Again!")
    } else {
        return linesNumber;
    }
}
};


const getBet = (balance,linesNumber) => {
    while(true){
    const bet = prompt("Enter bet amount per line: ")
    const betNumber = parseFloat(bet);
    if (isNaN(betNumber) || betNumber <= 0 || betNumber > balance/linesNumber ) {
        console.log("Invalid Amount Entered.Please Try Again!")
    } else {
        return betNumber;
    }
}
}


let balance = deposit();

const linesNumber = numberOfLines();

const betNumber = getBet(balance,linesNumber);
