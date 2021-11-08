
let display = document.getElementById('output');

//links keyboard presses to displaying numbers and running operation functions. Limits the user to 16 characters.
document.addEventListener('keyup', keyboardEvent);
function keyboardEvent(e) {
    if (limitInputLength()) {;
    console.log(e);
    if (e.key == 9) {
        display.innerHTML += 9;
    } else if (e.key == 8) {
        display.innerHTML += 8;
    } else if (e.key == 7) {
        display.innerHTML += 7;
    } else if (e.key == 6) {
        display.innerHTML += 6;
    } else if (e.key == 5) {
        display.innerHTML += 5;
    } else if (e.key == 4) {
        display.innerHTML += 4;
    } else if (e.key == 3) {
        display.innerHTML += 3;
    } else if (e.key == 2) {
        display.innerHTML += 2;
    } else if (e.key == 1) {
        display.innerHTML += 1;
    } else if (e.key == 0) {
        display.innerHTML += 0;
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

//adds an event listener to each number button so when the user clicks a number, it pops up on the display
document.getElementById('sevenButton').addEventListener('click', function() {
    if (limitInputLength()){
         display.innerHTML += 7;
    };
});
document.getElementById('eightButton').addEventListener('click', function() {
    if (limitInputLength()){
        display.innerHTML += 8;
   };
});
document.getElementById('nineButton').addEventListener('click', function() {
    if (limitInputLength()){
        display.innerHTML += 9;
   };
});
document.getElementById('fourButton').addEventListener('click', function() {
    if (limitInputLength()){
        display.innerHTML += 4;
   };
});
document.getElementById('fiveButton').addEventListener('click', function() {
    if (limitInputLength()){
        display.innerHTML += 5;
   };
});
document.getElementById('sixButton').addEventListener('click', function() {
    if (limitInputLength()){
        display.innerHTML += 6;
   };
});
document.getElementById('oneButton').addEventListener('click', function() {
    if (limitInputLength()){
        display.innerHTML += 1;
   };
});
document.getElementById('twoButton').addEventListener('click', function() {
    if (limitInputLength()){
        display.innerHTML += 2;
   };
});
document.getElementById('threeButton').addEventListener('click', function() {
    if (limitInputLength()){
        display.innerHTML += 3;
   };
});
document.getElementById('fourButton').addEventListener('click', function() {
    if (limitInputLength()){
        display.innerHTML += 4;
   };
});
document.getElementById('zeroButton').addEventListener('click', function() {
    if (limitInputLength()){
        display.innerHTML += 0;
   };
});
document.getElementById('clearButton').addEventListener('click', function() {
    display.innerHTML = null;
});
//potential decimal button listener - NEED TO BUILD OUT FUNCTIONALITY
// document.getElementById('periodButton').addEventListener('click', function() {
//     display.innerHTML += ".";
// });

document.getElementById('additionButton').addEventListener('click', addButtonFunction);
document.getElementById('equalButton').addEventListener('click', equalButtonFunction);
document.getElementById('divideButton').addEventListener('click', divideButtonFunction);
document.getElementById('multiplyButton').addEventListener('click', multiplyButtonFunction);
document.getElementById('subtractButton').addEventListener('click', subtractButtonFunction);
let firstNumber = 0;
let secondNumber = 0;
let operation =null;

function addButtonFunction () {
    firstNumber = parseInt(display.innerHTML);
    operation = "add";
    display.innerHTML = null;
};

function subtractButtonFunction () {
    firstNumber = parseInt(display.innerHTML);
    operation = "subtract";
    display.innerHTML = null;
};

function multiplyButtonFunction () {
    firstNumber = parseInt(display.innerHTML);
    operation = "multiply";
    display.innerHTML = null;
};

function divideButtonFunction () {
    firstNumber = parseInt(display.innerHTML);
    operation = "divide";
    display.innerHTML = null;
};


function equalButtonFunction () {
secondNumber = parseInt(display.innerHTML);
console.log(firstNumber, secondNumber);
if (operation == "add") {
    let result = firstNumber + secondNumber;
    display.innerHTML = result;
    operation = null;
}
if (operation == 'multiply') {
    let result = firstNumber * secondNumber;
    display.innerHTML = result;
    operation = null;
}
if (operation =='subtract'){
    let result = firstNumber - secondNumber;
    display.innerHTML = result;
    operation = null;
}
if (operation == 'divide') {
    let result = firstNumber / secondNumber;
    display.innerHTML = result;
    operation = null;
}
}
// const limitOutput {
//     if (display.innerHTML
// }