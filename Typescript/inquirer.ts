import inquirer from 'inquirer';

let anwser = await inquirer.prompt([{
    type: "input",
    name: "name",
    message: "What is your name?",
},
{
    type: 'list',
    name: 'color',
    message: 'What is your favorite color?',
    choices: ['Red', 'Blue', 'Green'],
}
])

console.log(`Hello ${anwser.name}. ${anwser.color}`);