const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: "input",
        name: 'projectTitle',
        message: 'Enter your project title'
    },
    {
        type: "input",
        name: 'description',
        message: 'Enter your project description'
    },
    
    {
        type: "input",
        name: 'installation',
        message: 'Enter your project installation'
    },
    {
        type: "input",
        name: 'usage',
        message: 'Enter your project usage'
    },
    {
        type: "list", 
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache', 'GNU', 'BSD']
    },
    {
        type: "input",
        name: 'contributions',
        message: 'Enter your project contributions'
    },
    {
        type: "input",
        name: 'tests',
        message: 'Enter your project tests'
    },
    {
        type: "input",
        name: 'questions',
        message: 'Enter your project question'
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
])
.then((answers) => {
    const content = `
    ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)
`;
    const readme = `
# ${answers.projectTitle}

## Description
${answers.description}

## Table of Contents
${content}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
[![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})
This project is licensed under the ${answers.license} License.

## Contributing
${answers.contributions}

## Tests
${answers.tests}

## Questions
- GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
- Email: [${answers.email}](mailto:${answers.email})
`;

    fs.writeFileSync('README.md', readme);

    console.log('README.md file generated successfully!');
})
.catch((error) => {
    console.error('Error occurred:', error);
});
