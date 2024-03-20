// Function to generate markdown for README
function generateMarkdown(data) {
  // License badge URLs
  const licenseBadges = {
      'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      'Apache': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      'GPL': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
      'None': ''
  };

  const licenseBadge = licenseBadges[data.license];
  const licenseNotice = data.license !== 'None' ? `This application is covered under the ${data.license} license.` : 'No license chosen.';

  return `# ${data.title}

${licenseBadge}

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## License

${licenseNotice}

## Questions

For any questions, please contact:
- [GitHub](https://github.com/${data.username})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
