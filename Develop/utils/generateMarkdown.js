

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    BSD: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    GNU: '[![License: GPL v2](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    ECLIPSE: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  }
  return badges[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = {
    MIT: '[MIT](https://choosealicense.com/licenses/mit)',
    BSD: '[Bsd](https://choosealicense.com/licenses/bsd)',
    GNU: '[GNU](https://choosealicense.com/licenses/gpl-3.0/)',
    ECLIPSE: '[ECLIPSE](https://choosealicense.com/licenses/eclipse)'
  }
  return links[license]
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = licenseText => {
  if (!licenseText) {
    return '';
  }

  return `
  ## License
  `;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 
  ${renderLicenseBadge(data.license)}

  ## Description
   ${data.description}

  ## Table of Contents

  *[Description](#description)

  *[Installation](#installation)

  *[Usage](#usage)

  *[Licence](#licence)

  *[Contributing](#contributing)

  *[Tests](#tests)

  *[Questions](#questions)

  
  ## Installation
  ${data.install}

  ## Usage
   ${data.usage}

  ${renderLicenseSection(data.license)}

  ${renderLicenseLink(data.license)}

  ## Contribute
   ${data.contribute}

  ## Tests
   ${data.tests}

  ## Questions
   My GitHub can be found at https://github.com/${data.github}

  E-mail me at ${data.email}

   ${data.questions}
`;
}

module.exports = generateMarkdown;
