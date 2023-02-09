//Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license == "None") {
    return
  }
  if (license == "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  if (license == "GNU General Public License v3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  if (license == "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
}

//Create a function that returns the license link
function renderLicenseLink(license) {
  if (license == "None") {
    return
  }
  if (license == "Apache License 2.0") {
    return "https://opensource.org/licenses/Apache-2.0"
  }
  if (license == "GNU General Public License v3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0"
  }
  if (license == "MIT License") {
    return "https://opensource.org/licenses/MIT"
  }
}

//Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license == "None") {
    return
  }
  if (license == "Apache License 2.0") {
    return '[Apache License 2.0]' + '(' + renderLicenseLink(license) + ')'
  }
  if (license == "GNU General Public License v3.0") {
    return '[GNU General Public License v3.0]' + '(' + renderLicenseLink(license) + ')'
  }
  if (license == "MIT License") {
    return '[MIT License]' + '(' + renderLicenseLink(license) + ')'
  }
}

//Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.License)}
  
  # ${data.Title}\n

  ## Description
  \n ${data.Description}\n

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  \n ${data.Installation}\n

  ## Usage
  \n ${data.Usage}\n

  ## License
  \n ${renderLicenseSection(data.License)}\n

  ## Contributing
  \n ${data.Contributing}\n

  ## Tests
  \n ${data.Tests}\n

  ## Questions
  \n Please reach out to me if you have any questions!\n
  \n GitHub Username: ${data.GitHubUsername}\n
  \n Email: ${data.Email}\n

`;
}

module.exports = {
  generateMarkdown
}
