// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'why',
    message: 'Why did you build this project:'
  },
  {
    type: 'input',
    name: 'problems',
    message: 'What problems does the app solve:',
  },
  {
    type: 'input',
    name: 'purpose',
    message: 'Purpose of the app:',
  },
  {
    type: 'input',
    name: 'use',
    message: 'How to use the app:',
  },
  {
    type: 'input',
    name: 'install',
    message: 'How to install the app:',
  },
  {
    type: 'input',
    name: 'issues',
    message: 'How to report issues:',
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'How to contribute:'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('log.txt', questions, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers)
      const readMe = generateHtml(answers)
      console.log(readMe)
      fs.writeFile('index.html', readMe, (err) =>
        err ? console.error(err) : console.log('Success!')
      );
    })

    .catch((error) => {
      if (error.isTtyError) {
        "Prompt couldn't be rendered in the current environment"
      } else {
        "Something else went wrong"
      }
    });
}

function generateHtml(answers) {
  return
  `About this app: ${answers.why}. 
  How it helps: ${answers.problems} 
  What does it do ${answers.purpose}.
  It's easy to use: ${answers.use}
  All you have to do is: ${answers.install}
  If you run into a problem ${answers.issues},
  Feel free to leave a comment! ${answers.contribute}`;
}
// Function call to initialize app
init();