const questions = [
  {
    name: "Name:",
    message: "Add name? ",
    type: "input",
    validate: (input) => {
      if (input.trim() === "") {
        return "Team manager's name is required.";
      } else {
        return true;
      }
    },
  },
  {
    name: "Employee ID:",
    message: "Add employee ID? ",
    type: "input",
    validate: (input) => {
      if (input.trim() === "") {
        return "Team manager's employee ID is required.";
      } else {
        return true;
      }
    },
  },
  {
    name: "Email address:",
    message: "Add email address? ",
    type: "input",
    validate: (input) => {
      if (input.trim() === "") {
        return "Team manager's email address is required.";
      } else {
        return true;
      }
    },
  },
  {
    name: "Office number:",
    message: "Add Office number? ",
    type: "input",
    validate: (input) => {
      if (input.trim() === "") {
        return "Team manager's email address is required.";
      } else {
        return true;
      }
    },
  },

  {
    name: "Menu:",
    message:
      "What do you want to do next? You can choose from the following options:",
    type: "list",
    choices: ["Add an Engineer", "Add an Intern", "Finish building the Team"],
  },
];

module.exports = questions;
