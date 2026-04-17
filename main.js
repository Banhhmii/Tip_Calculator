const prompt = require("prompt-sync")()
let bill = parseFloat(prompt("What is the bill amount? "));
let tip = parseFloat(prompt("What percentage tip would you like to give? "));

function calculateTip(bill, tip) {
    let tipAmount = bill * (tip / 100);
    let totalAmount = bill + tipAmount;
    return totalAmount;
}

let total = calculateTip(bill, tip);
console.log(`The total amount paid including tip is: ${total}`);