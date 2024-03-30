import inquirer from "inquirer";
import chalk from "chalk";

let balance = 10000;

let myPin = 1234;

let anwserPin = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin",
    type: "number",
  },
]);
if (anwserPin.pin === myPin) {
  console.log(chalk.green.bold,(`Welcome`));

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "select one option",
      type: "list",
      choices: ["withdraw", "check balance", "fastcash"],
    },
  ]);
  console.log(operationAns);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]);
    if (amountAns.amount <= balance) {
      let remainingBal = (balance -= amountAns.amount);
      console.log(`your remaining balance is :${balance}`);
    } else {
      console.log("Insuficient Balance");
    }
  }

  if (operationAns.operation === "check balance") {
    console.log(`your current balance is :${balance}`);
  }

  if (operationAns.operation === "fastcash") {
    let anscash = await inquirer.prompt([{
      name : "cash",
      type : "number",
      message : "Enter Cash Amount"
      },

  ]);
  if (anscash.cash <= balance) {
    let remainingcash = balance -= anscash.cash;
    console.log(`your current balance is :${balance}`);
  }
    else {
      console.log("Insuficient Balance");
    }
  }
} else {
  console.log("Invalid Pin");
}
