"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var num = Math.floor(Math.random() * 10);
var ans = await inquirer_1.default.prompt({
    type: "number",
    name: 'userInput',
    message: 'Guess the number between 1 to 10: ',
});
console.log('The number generated is', num, 'and the number you guess is', ans.userInput);
if (num === ans.userInput) {
    console.log("You guess the correct number, Bravo!");
}
else if (num === ans.userInput - 1 || num === ans.userInput + 1) {
    console.log('Too close, better luck next time.');
}
else {
    console.log('Wrong guess!');
}
