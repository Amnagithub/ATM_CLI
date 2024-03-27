import inquirer from "inquirer";
let balance = 10000;
let myPin = 1234;
let anwserPin = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    }
]);
console.log(anwserPin.pin);
if (anwserPin === myPin) {
    console.log("you are Welcome");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Select One Option",
            type: "list",
            choices: ["withdraw", "check balance", "fastcash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
    }
}
else {
    console.log("Invalid Pin");
}
