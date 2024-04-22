// import inquirer from  "inquirer";
// const answers:{
//     numberOne: number,
//     numberTwo: number,
//     operator: string
// } = await inquirer.prompt([
//     { type: "number",
//       name: "numberOne",
//       message: "Enter your first number"
//     },
//     {
//         type: "number",
//         name: "numberTwo",
//         message: "Enter your second number"
//     },
//     { type: "list",
//       name: "operator",
//       message: "Enter your operator",
//       choices: ["+","-","*","/"]}
// ])
// const {numberOne, numberTwo,operator} = answers;
// let result 
// switch (operator) {
//     case "+":
//         result = numberOne + numberTwo
//         break;
//     case "-":
//         result = numberOne - numberTwo 
//         break;
//     case "*":
//         result = numberOne * numberTwo
//         break;
//     case "/":
//         result = numberOne / numberTwo
//         break;           
//     default:
//         console.log("invalid operator");
// }
// console.log(`${numberOne} ${operator} ${numberTwo} =${result}`) ;
// import inquirer from "inquirer";
// let currencyconversion:{
//     "PKR" : {
//         "USD" : 0.0036,
//         "GBP" : 0.0029,
//         "PKR" : 1,
//     },
//     "GBP" : {
//         "USD" : 1.23,
//         "GBP" : 1,
//         "PKR" : 343.09,
//     },
//     "USD" : {
//         "USD" : 1,
//         "GBP" : 0.81,
//         "PKR" : 278.54,
//     },
// };
// const answer:{
//     from : "PKR" | "GBP" | "USD",
//     to : "PKR" | "GBP" | "USD",
//     amount : number,
// } = await inquirer.prompt([{
//     type : "list",
//     name : "from",
//     message : "please select your currency?",
//     choices : ["PKR", "GBP", "USD"],
// },
// {
//     type : "list",
//     name : "to",
//     message : "please select your currency?",
//     choices : ["PKR", "GBP", "USD"],
// },
// {
//     type : "number",
//     name : "amount",
//     message : "please enter the amount wish you to convert",
// },
// ]);
// const {from, to, amount} = answer;
// if (from && to && amount){
//     let result = currencyconversion[from][to] *amount;
//     console.log(`your conversion from ${from} to ${to} is ${result}`);
// }else {
//     console.log("invalid conversion");
// }
import inquirer from "inquirer";
do {
    let currencyconversion = {
        "PKR": {
            "USD": 0.0036,
            "GBP": 0.0029,
            "PKR": 1,
        },
        "GBP": {
            "USD": 1.23,
            "GBP": 1,
            "PKR": 343.07,
        },
        "USD": {
            "USD": 1,
            "GBP": 0.81,
            "PKR": 278.54,
        },
    };
    const answer = await inquirer.prompt([{
            type: "list",
            name: "from",
            message: "select your currency",
            choices: ["PKR", "GBP", "USD"],
        },
        {
            type: "list",
            name: "to",
            message: "please enter your currency rate",
            choices: ["PKR", "GBP", "USD"]
        },
        {
            type: "number",
            name: "amount",
            message: "please enter amount wish you to convert",
        },
    ]);
    const { from, to, amount } = answer;
    if (from && to && amount) {
        let result = currencyconversion[from][to] * amount;
        console.log(`your conversion from ${from} to ${to} is ${result}`);
    }
    else {
        console.log("invalid conversion");
    }
} while (true);
