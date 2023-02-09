//Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')


//Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the Title of your project?',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'Please enter a description for your project:',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'Please enter installation instructions:',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'Please enter usage information:',
        name: 'Usage',
    },
    {
        type: 'list',
        message: 'Please select license:',
        name: 'License',
        choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License"],
    },
    {
        type: 'input',
        message: 'Please enter contribution guidelines:',
        name: 'Contributing',
    },
    {
        type: 'input',
        message: 'Please enter test instructions:',
        name: 'Tests',
    },
    {
        type: 'input',
        message: 'Please enter your GitHub Username:',
        name: 'GitHubUsername',
    },
    {
        type: 'input',
        message: 'Please enter your email:',
        name: 'Email',
    },
];

//Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown.generateMarkdown(data), (err) => err ? console.error(err) : console.log('Success!'))
}

// Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>  writeToFile("README.md", response))      
}

// Function call to initialize app
init();
