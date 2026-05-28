# GFL Lumina : Human Resources Policy QnA Assitant   

Qlik Embedded Analytics with Qlik-Embed and m2m Authentication with impersonation for SSO

## Basic Overview

Lumina has an embedded Qlik Answers Assistant in a simple HTML, CSS and JS application served via Express.js. The knowledge base for the assistant contains 13 Human Resource Policies spanning over the following topics -
- Recruitment
- Paid Leaves
- Employee Induction
- Career Progression
- Work From Home

The user can ask queries based on policies included but not limited to the topics mentioned above.

## Customization

To build a knowledge base and assistant in Qlik, refer to the following documentation -

[Qlik Answers Official Documentation](https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/QlikAnswers/Qlik-Answers.htm)

After creating a knowledge base and connecting it to an assistant, rename the template.env file to .env and insert your variables.

## Installation

```bash
npm install
npm start run