function sum (a,b){
    return a+b;
}

function substract (a,b){
    return a-b;
}

function multiply (a,b){
    return a*b;
}

function divide (a,b){
    return a/b;
}

function operate (a,b, func){
    return func(a,b);
}

let firstNumber;
let secondNumber;
let operator;
let currentValueDisplay;


const digits = document.querySelectorAll(".digit");
const display = document.querySelector("#display");

digits.forEach ((x) => {
    x.addEventListener ("click", () => {
        display.textContent += x.getAttribute("id");
        currentValueDisplay = parseFloat(display.textContent);
    });
});