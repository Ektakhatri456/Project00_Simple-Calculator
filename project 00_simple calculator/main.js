//Creating Simple Calculator to get input from the User.
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter your 1st Number : ",
        type: "number",
        name: "First_Number",
    },
    {
        message: "Enter your 2nd Number : ",
        type: "number",
        name: "Second_Number",
    },
    {
        message: "Which Operation would you like to perform?",
        type: "list",
        name: "operator",
        choices: ["Division", "Multiplication", "Addition", "Subtraction", "Square root"],
    },
]);
if (answer.operator === "Division") {
    console.log(answer.First_Number / answer.Second_Number);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.First_Number * answer.Second_Number);
}
else if (answer.operator === "Addition") {
    console.log(answer.First_Number + answer.Second_Number);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.First_Number - answer.Second_Number);
}
else if (answer.operator === "Square") {
    console.log(answer.First_Number * answer.First_Number);
}
else {
    console.log("Please enter valid input.");
}
console.log(answer);
