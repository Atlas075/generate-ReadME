const fs = require('fs');
const inquirer = require("inquirer")
const generatePage = require('./generateMarkdown');

const promptUser = () => {
return inquirer.prompt ([
    
])
}

console.log(promptUser)



const promptReadme = readmeData => {

    return inquirer.prompt ([
{
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username. (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please provide your Email address. (Required)',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter your Email.');
              return false;
            }
          }
      },
        {
            type: 'input',
            name: 'title',
            message: 'Please enter the title of your project! (Required)',
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('You need to enter a project title!');
                  return false;
                }
              }
        },
                
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project.',
       },
                
        {
            type: 'input',
            name: 'install',
            message: 'What method did you user to install your project?'
        },
                
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. (screenshots optional)'
        },

        {
          type: 'confirm',
          name: 'confirmLicense',
          message: 'Would you like to enter a license?',
          default: true
        },
                
        {
            type: 'list',
            name: 'license',
            message: 'What licence(s) did your project use?',
            choices: ['BSD', 'MIT', 'GNU', 'ECLIPSE',],
            when: ({confirmLicense}) => confirmLicense,
            default: true
        },
                
        {
            type: 'input',
            name: 'contribute',
            message: 'Please enter a way to contribute.'
        },
                
        {
            type: 'input',
            name: 'tests',
            message: 'You can test this application by following these syntaxes.'
        },
                
        {
            type: 'input',
            name: 'questions',
            message: 'Where can you be reached for additional questions?'
        },
        
    ])
    // .then(projectData => {
    //     readmeData.projects.push(projectData);
    //     if (projectData.confirmAddProject) {
    //       return promptProject(portfolioData);
    //     } else {
    //       return portfolioData;
    //     }
    //   });
}

promptUser()
.then(promptReadme)
.then(readmeData => {
    const pageREADME = generatePage(readmeData);
    fs.writeFile('./README.md', pageREADME, err => {
      if (err) throw new Error(err);
      console.log('Page created! Check out README.md in this directory to view youe personal read me.');
    });
})