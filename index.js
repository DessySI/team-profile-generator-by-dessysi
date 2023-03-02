const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./src/page-template.js");
const questions = require("./questions/questions.js");
const questionsEmployee = require("./questions/questionsEmployee.js");
const htmlList = [];
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Create the output directory if it doesn't exist
const printDoc = async () => {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  // Write the HTML file to the output directory using the render function and the htmlList array
  fs.writeFile(outputPath, render(htmlList), (err) => {
    if (err) throw err;
    console.log(`You can find your new file here: ${OUTPUT_DIR}`);
  });
};

const startQuestions = async () => {
  // Prompt the user for the manager's information and create a new Manager object
  console.log("// Add Manager to your team //");
  const answers = await inquirer.prompt(questions);
  const { name, employeeID, emailAddress, officeNumber } = answers;
  const manager = new Manager(name, employeeID, emailAddress, officeNumber);
  htmlList.push(manager);

  // Prompt the user for the type of employee to add and their information, and create a new object of the appropriate type
  let menu = "";
  while (menu !== "Finish building the Team") {
    console.log("// Add Employee to your team //");
    const menuAnswer = await inquirer.prompt(questionsEmployee);
    menu = menuAnswer.menu;
    const { name, employeeID, emailAddress, gitHub, school } = menuAnswer;
    switch (menu) {
      case "Add an Engineer":
        const engineer = new Engineer(name, employeeID, emailAddress, gitHub);
        htmlList.push(engineer);
        break;
      case "Add an Intern":
        const intern = new Intern(name, employeeID, emailAddress, school);
        htmlList.push(intern);
        break;
      case "Finish building the Team":
        break;
      default:
        console.log("Invalid menu option selected.");
        break;
    }
  }
  // Call the printDoc function to generate the HTML file
  printDoc();
};
startQuestions();
