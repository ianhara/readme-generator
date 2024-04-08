const inquirer = require('inquirer')
const fs = require('fs')
inquirer.prompt([
    {
        type : "input",
        name: 'projectTitle',
        message: 'Enter your project title' 

    }
    {
        type : "input",
        name: 'description',
        message: 'Enter your project desctription' 

    }
    {
        type : "input",
        name: 'tableOfContents',
        message: 'Enter your table of contents' 

    }
    {
        type : "input",
        name: 'installation',
        message: 'Enter your project installation' 

    }
    {
        type : "input",
        name: 'usage',
        message: 'Enter your project usage' 

    }
    {
        type : "input",
        name: 'License',
        message: 'Enter your project license' 

    }
    {
        type : "input",
        name: 'contributions',
        message: 'Enter your project contributions' 

    }
    {
        type : "input",
        name: 'Tests',
        message: 'Enter your project tests' 

    }
    {
        type : "input",
        name: 'questions',
        message: 'Enter your project question' 

    }
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
    .then((answers)=> {
        const readme =`
        # ${answers.projectTitle}
        ## description

        
        
    `}
)
])