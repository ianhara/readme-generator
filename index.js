const inquirer = required('inquirer')
const fs = required('fs')
inquirer.prompt([
    {
        type : "input",
        name: 'projectTitle',
        message: 'Enter your project title' 

    }
    .then((answers)=> {
        const readme = 
        # ${answers.projectTitle}
        ## description
        
        
    }
)
])