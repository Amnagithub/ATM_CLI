#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let balance = 10000;
let myPin = 1234;
let anwserPin = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin",
        type: "number",
    },
]);
if (anwserPin.pin === myPin) { // pin code verification
    console.log(chalk.bgGreenBright.bold(`"Welcome To ATM Services"`)); //action perform in tamplet litral
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Select One Option",
            type: "list",
            choices: ["Withdraw", "CheckBalance", "FastCash"],
        },
    ]);
    // action perform for withdraw amount
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Your Amount",
                type: "number",
            },
        ]);
        if (amountAns.amount <= balance) { //action perform for not exceed the balance amount
            let remainingBal = (balance -= amountAns.amount); // action perform for remaining balance
            console.log(chalk.bgCyan.bold `Your Remaining Balance is :${balance}$`);
        }
        else {
            console.log(chalk.bgRedBright.bold(`"Insufficient Balance"`));
        }
    }
    if (operationAns.operation === "CheckBalance") {
        //action perform for balance check
        console.log(chalk.bgBlueBright.bold(`Your Current Balance is :${balance} $`));
    }
    if (operationAns.operation === "FastCash") {
        //action perform for Fast Cash
        let anscash = await inquirer.prompt([
            {
                name: "cash",
                type: "number",
                message: "Enter Cash Amount",
            },
        ]);
        if (anscash.cash <= balance) {
            //action perform for not exceed the balance amount
            let remainingcash = (balance -= anscash.cash); // action perform for remaining balance
            console.log(chalk.bgBlueBright.bold(`Your Current Balance is :${balance}$`));
        }
        else {
            console.log(chalk.bgRedBright.bold(`"Insufficient Balance"`));
        }
    }
}
else {
    console.log(chalk.bgRedBright.bold(`"Invalid Pin"`));
}
