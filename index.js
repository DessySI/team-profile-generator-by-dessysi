const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./src/page-template.js");
const questions = require("./questions/questions.js");
const htmlList = [];
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// function that uses Inquirer to gather information about the development team members and creates objects for each team member using the correct classes as blueprints.
async function managerInput() {
  console.log("// Add Manager to your team //");
  const managerQ = await inquirer.prompt(questions).then(function (userInput) {
    const { name, id, email, officeNumber } = userInput;
    const manager = new Manager(name, id, email, officeNumber);
    htmlList.push(manager);
    console.log("// Add Engineer to your team //");
  });
  questions[3].name = "GitHub username";
  questions[3].message = "Add GitHub username. ";

  const engineerQ = await inquirer.prompt(questions).then(function (userInput) {
    const { name, id, email, gitHubUsername } = userInput;
    const engineer = new Engineer(name, id, email, gitHubUsername);
    htmlList.push(engineer);
  });
  questions[3].name = "School";
  questions[3].message = "Add School. ";
  const internQ = await inquirer.prompt(questions).then(function (userInput) {
    const { name, id, email, school } = userInput;
    const intern = new Intern(name, id, email, school);
    htmlList.push(intern);
  });
  function printDoc() {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }

    fs.writeFile(outputPath, render(htmlList), (err) => {
      if (err) throw err;
      console.log(`You can find your new file here: ${OUTPUT_DIR}`);
    });
  }

  printDoc({ employees: htmlList });
}

managerInput();
