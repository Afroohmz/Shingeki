const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use your project?'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are the contribution guidelines?'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the test instructions?'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache', 'GPL', 'None']
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    }
  ];

async function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('README.md generated successfully!');
            }
        });
    });
}

async function init() {
    try {
        // Prompt user for input
        const userInput = await inquirer.prompt(questions);

        // Generate markdown content based on user input
        const markdownContent = generateMarkdown(userInput);

        // Write markdown content to README file
        const result = await writeToFile('README.md', markdownContent);
        console.log(result);
    } catch (error) {
        console.error('Error generating README:', error);
    }
}

// Function call to initialize app
init();
