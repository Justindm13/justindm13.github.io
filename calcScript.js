let display = document.getElementById('output');

document.getElementById('additionButton').addEventListener('click', addButtonFunction);
document.getElementById('equalButton').addEventListener('click', equalButtonFunction);
document.getElementById('divideButton').addEventListener('click', divideButtonFunction);
document.getElementById('multiplyButton').addEventListener('click', multiplyButtonFunction);
document.getElementById('subtractButton').addEventListener('click', subtractButtonFunction);

//adds an event listener to each number button so when the user clicks a number, it populates up on the calculator display
document.getElementById('sevenButton').addEventListener('click', function() {
    displayOperatorCheck();
    if (limitInputLength()){
         display.innerHTML += 7;
    };
});
document.getElementById('eightButton').addEventListener('click', function() {
    displayOperatorCheck();
    if (limitInputLength()){
        display.innerHTML += 8;
   };
});
document.getElementById('nineButton').addEventListener('click', function() {
    displayOperatorCheck();
    if (limitInputLength()){
        display.innerHTML += 9;
   };
});
document.getElementById('fourButton').addEventListener('click', function() {
    displayOperatorCheck();
    if (limitInputLength()){
        display.innerHTML += 4;
   };
});
document.getElementById('fiveButton').addEventListener('click', function() {
    displayOperatorCheck();
    if (limitInputLength()){
        display.innerHTML += 5;
   };
});
document.getElementById('sixButton').addEventListener('click', function() {
    displayOperatorCheck();
    if (limitInputLength()){
        display.innerHTML += 6;
   };
});
document.getElementById('oneButton').addEventListener('click', function() {
    displayOperatorCheck();
    if (limitInputLength()){
        display.innerHTML += 1;
   };
});
document.getElementById('twoButton').addEventListener('click', function() {
    displayOperatorCheck();
    if (limitInputLength()){
        display.innerHTML += 2;
   };
});
document.getElementById('threeButton').addEventListener('click', function() {
    displayOperatorCheck();
    if (limitInputLength()){
        display.innerHTML += 3;
   };
});
document.getElementById('fourButton').addEventListener('click', function() {
    displayOperatorCheck();
    if (limitInputLength()){
        display.innerHTML += 4;
   };
});
document.getElementById('zeroButton').addEventListener('click', function() {
    displayOperatorCheck();
    if (limitInputLength()){
        display.innerHTML += 0;
   };
});
document.getElementById('clearButton').addEventListener('click', function() {
    display.innerHTML = '';
    ongoingCalculationDisplay.innerHTML='';
    runningTotal=0;
    firstNumber=undefined;
    lastButtonWasOperation = false; 
    operation = null;
});

document.getElementById('deleteButton').addEventListener('click', function() {
    if (lastButtonWasOperation==true){
        return;
    } else {
    let popped = display.innerHTML.split("");
    popped.pop();
    display.innerHTML = popped.join("");
}});

document.getElementById('periodButton').addEventListener('click', function() {
    displayOperatorCheck();
    if (limitPeriodInput()){;
    display.innerHTML += ".";
}});

//links keyboard presses to displaying numbers and running operation functions. Limits the user to 16 characters.
document.addEventListener('keyup', keyboardEvent);
function keyboardEvent(e) {
    if (limitInputLength()) {;
    console.log(e);
    if (e.key == 9) {
        displayOperatorCheck();
        display.innerHTML += 9;
    } else if (e.key == 8) {
        displayOperatorCheck();
        display.innerHTML += 8;
    } else if (e.key == 7) {
        displayOperatorCheck();
        display.innerHTML += 7;
    } else if (e.key == 6) {
        displayOperatorCheck();
        display.innerHTML += 6;
    } else if (e.key == 5) {
        displayOperatorCheck();
        display.innerHTML += 5;
    } else if (e.key == 4) {
        displayOperatorCheck();
        display.innerHTML += 4;
    } else if (e.key == 3) {
        displayOperatorCheck();
        display.innerHTML += 3;
    } else if (e.key == 2) {
        displayOperatorCheck();
        display.innerHTML += 2;
    } else if (e.key == 1) {
        displayOperatorCheck();
        display.innerHTML += 1;
    } else if (e.key == 0) {
        displayOperatorCheck();
        display.innerHTML += 0;
    } else if (e.key == "."){
        displayOperatorCheck();
        if (limitPeriodInput()){;
        display.innerHTML += ".";
        }
    }
}
    if (e.key == "+") {
        addButtonFunction();
    }
    if (e.key == "Enter") {
        equalButtonFunction();
    }
    if (e.key == "-") {
        subtractButtonFunction();
    }
    if (e.key == "*") {
        multiplyButtonFunction();
    }
    if (e.key == "/") {
        divideButtonFunction();
    }
}

//limits the user to 16 characters of input. 
function limitInputLength () {
    if (display.innerHTML.length > 16) {
        return false;
    }
    return true;
}

//limits the user to only putting 1 decimal
function limitPeriodInput (){
    if (display.innerHTML.includes(".")){
        return false;
    } else {
        return true;
    }
}

// Checks to see if the display is currently showing an operator function. If so, removes it so the next number can be typed in.
function displayOperatorCheck () {
    if (operation=="equal"){
        display.innerHTML = '';
        ongoingCalculationDisplay.innerHTML='';
        runningTotal=0;
        firstNumber=undefined;
        lastButtonWasOperation = false; 
        operation = null;
    } else if (lastButtonWasOperation == true) {
        display.innerHTML = '';
        lastButtonWasOperation = false;        
    }
}

let firstNumber = undefined; //this is only utilzed in the multiply and divide functionality
let runningTotal =0; //this is utilized across the calculator to keep track of the result from the last completed operation
let operation =null; //this is utilized to track the last operation button clicked by the user
let lastButtonWasOperation = false; //this tracks if the last button pressed by the user was an operation button.
let ongoingCalculationDisplay = document.getElementById('ongoingCalculation');

function addButtonFunction () {
    //if operation is set to equal, the last operation button to be 
    //pressed was equal, so the function will move the running total 
    //to the ongoing display, insert an + operator and be ready for the next number.
    console.log(operation, lastButtonWasOperation, runningTotal);
    if (operation == "equal") {
        ongoingCalculationDisplay.innerHTML = runningTotal + " + ";
        display.innerHTML = runningTotal;
        operation = "add";
        lastButtonWasOperation = true;
        console.log("option 1");
    } else if (operation !== "add" & lastButtonWasOperation==true){
        ongoingCalculationDisplay.innerHTML = display.innerHTML + " + ";
        operation = "add";
        lastButtonWasOperation = true;
        console.log("option 2");
    } else {
        if (runningTotal == 0){
        console.log(display.innerHTML);
        ongoingCalculationDisplay.innerHTML = display.innerHTML + " + ";
        runningTotal = runningTotal + parseFloat(display.innerHTML);
        limitRunningTotalToTwoDecimals();
        operation = "add";
        lastButtonWasOperation = true;
        console.log("option 3");
        } else if (runningTotal !== 0){
        runningTotal = runningTotal + parseFloat(display.innerHTML);
        limitRunningTotalToTwoDecimals();
        console.log(display.innerHTML);
        ongoingCalculationDisplay.innerHTML = runningTotal + " + ";
        display.innerHTML = runningTotal;
        operation = "add";
        lastButtonWasOperation = true;
        console.log("option 4");
        } else {
            alert("Something went wrong adding");
        }
    }
} 
function subtractButtonFunction () {
    //if operation is set to equal, the last operation button to be 
    //pressed was equal, so the function will move the running total 
    //to the ongoing display, insert an + operator and be ready for the next number.
    if (operation == "equal") {
        ongoingCalculationDisplay.innerHTML = runningTotal + " - ";
        display.innerHTML = runningTotal;
        operation = "subtract";
        lastButtonWasOperation = true;
        console.log("sub option 1");
    } else if (operation !== "subtract" & lastButtonWasOperation==true){
        ongoingCalculationDisplay.innerHTML = display.innerHTML + " - ";
        operation = "subtract";
        lastButtonWasOperation = true;
        console.log("sub option 2");
    } else {
        if (runningTotal == 0){
        console.log(display.innerHTML);
        ongoingCalculationDisplay.innerHTML = display.innerHTML + " - ";
        runningTotal = parseFloat(display.innerHTML);
        limitRunningTotalToTwoDecimals();
        operation = "subtract";
        lastButtonWasOperation = true;
        console.log("sub option 3", operation, lastButtonWasOperation);
        } else if (runningTotal !== 0){
        runningTotal = runningTotal - parseFloat(display.innerHTML);
        limitRunningTotalToTwoDecimals();
        console.log(display.innerHTML);
        ongoingCalculationDisplay.innerHTML = runningTotal + " - ";
        display.innerHTML = runningTotal;
        operation = "subtract";
        lastButtonWasOperation = true;
        console.log("sub option 4");
        } else {
            alert("Something went wrong subtracting");
        }
    }
       
}
function multiplyButtonFunction () {
    //if operation is set to equal, the last operation button to be 
    //pressed was equal, so the function will move the running total 
    //to the ongoing display, insert an + operator and be ready for the next number.
    if (operation == "equal") {
        ongoingCalculationDisplay.innerHTML = runningTotal + " * ";
        display.innerHTML = runningTotal;
        operation = "multiply";
        lastButtonWasOperation = true;
    }  else if (operation !== "multiply" & lastButtonWasOperation==true){
        ongoingCalculationDisplay.innerHTML = display.innerHTML + " * ";
        operation = "multiply";
        lastButtonWasOperation = true;
        console.log("multiply option 2");
    } else {
        if (runningTotal == 0){
        console.log(display.innerHTML);
        ongoingCalculationDisplay.innerHTML = display.innerHTML + " * ";
        runningTotal = parseFloat(display.innerHTML);
        limitRunningTotalToTwoDecimals();
        operation = "multiply";
        lastButtonWasOperation = true;
        console.log("multiply option 3");
        } else {
        runningTotal = runningTotal * parseFloat(display.innerHTML);
        limitRunningTotalToTwoDecimals();
        console.log(display.innerHTML);
        ongoingCalculationDisplay.innerHTML = runningTotal + " * ";
        display.innerHTML = runningTotal;
        operation = "multiply";
        lastButtonWasOperation = true;
        console.log("multiply option 5");
        }
    }
}
   

function divideButtonFunction () {
    //if operation is set to equal, the last operation button to be 
    //pressed was equal, so the function will move the running total 
    //to the ongoing display, insert an + operator and be ready for the next number.
    if (operation == "equal") {
        ongoingCalculationDisplay.innerHTML = runningTotal + " / ";
        display.innerHTML = runningTotal;
        operation = "divide";
        lastButtonWasOperation = true;
    }  else if (operation !== "divide" & lastButtonWasOperation==true){
        ongoingCalculationDisplay.innerHTML = display.innerHTML + " / ";
        operation = "divide";
        lastButtonWasOperation = true;
        console.log("divide option 2");
    }else {
        if (runningTotal == 0){
        console.log(display.innerHTML);
        ongoingCalculationDisplay.innerHTML = display.innerHTML + " / ";
        runningTotal = parseFloat(display.innerHTML);
        limitRunningTotalToTwoDecimals();
        operation = "divide";
        lastButtonWasOperation = true;
        console.log("divide option 3");
        } else {
        runningTotal = runningTotal / parseFloat(display.innerHTML);
        limitRunningTotalToTwoDecimals();
        console.log(display.innerHTML);
        ongoingCalculationDisplay.innerHTML = runningTotal + " / ";
        display.innerHTML = runningTotal;
        operation = "divide";
        lastButtonWasOperation = true;
        console.log("divide option 5");
        }
    }
}    

function equalButtonFunction () {
secondNumber = parseFloat(display.innerHTML);
console.log(runningTotal, display.innerHTML);
if (operation == "add") {
    ongoingCalculationDisplay.innerHTML += " " + display.innerHTML + " = ";
    runningTotal = parseFloat(runningTotal) + parseFloat(display.innerHTML);
    limitRunningTotalToTwoDecimals();
    display.innerHTML = runningTotal;
    operation = "equal";
    lastButtonWasOperation = true;
}
if (operation == 'multiply') {
    ongoingCalculationDisplay.innerHTML += " " + display.innerHTML + " = ";
    runningTotal = parseFloat(runningTotal) * parseFloat(display.innerHTML);
    limitRunningTotalToTwoDecimals();
    display.innerHTML = runningTotal;
    operation = "equal";
    lastButtonWasOperation = true;
}
if (operation =='subtract'){
    ongoingCalculationDisplay.innerHTML += " " + display.innerHTML + " = ";
    runningTotal = parseFloat(runningTotal) - parseFloat(display.innerHTML);
    limitRunningTotalToTwoDecimals();
    display.innerHTML = runningTotal;
    operation = "equal";
    lastButtonWasOperation = true;
}
if (operation == 'divide') {
    ongoingCalculationDisplay.innerHTML += " " + display.innerHTML + " = ";
    runningTotal = parseFloat(runningTotal) / parseFloat(display.innerHTML);
    limitRunningTotalToTwoDecimals();
    display.innerHTML = runningTotal;
    operation = "equal";
    lastButtonWasOperation = true;
}
}

function limitRunningTotalToTwoDecimals (){
    runningTotal = parseFloat(runningTotal).toFixed(2);
    if ((runningTotal - Math.floor(runningTotal)) == 0) {
        runningTotal = parseInt(runningTotal);
    }
};