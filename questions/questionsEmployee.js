module.exports = [
  {
    name: "menu",
    message: "Choose an option:",
    type: "list",
    choices: ["Add an Engineer", "Add an Intern", "Finish building the Team"],
  },
  {
    name: "name",
    message: "Add name? ",
    type: "input",
    validate: (input) => {
      if (input.trim() === "") {
        return "Name is required.";
      } else {
        return true;
      }
    },
    when: (answers) => {
      // only ask for age if name is provided
      return answers.menu !== "Finish building the Team";
    },
  },
  {
    name: "employeeID",
    message: "Add employee ID? ",
    type: "input",
    validate: (input) => {
      if (input.trim() === "") {
        return "Employee ID is required.";
      } else {
        return true;
      }
    },
    when: (answers) => {
      // only ask for age if name is provided
      return answers.menu !== "Finish building the Team";
    },
  },
  {
    name: "emailAddress",
    message: "Add email address? ",
    type: "input",
    validate: (input) => {
      if (input.trim() === "") {
        return "Email address is required.";
      } else {
        return true;
      }
    },
    when: (answers) => {
      // only ask for age if name is provided
      return answers.menu !== "Finish building the Team";
    },
  },
  {
    name: "gitHub",
    message: "Add your GitHub username? ",
    type: "input",
    validate: (input) => {
      if (input.trim() == "") {
        return "GitHub username is required.";
      } else {
        return true;
      }
    },
    when: (answers) => {
      // only ask for age if name is provided
      return answers.menu == "Add an Engineer";
    },
  },
  {
    name: "school",
    message: "Add school? ",
    type: "input",
    validate: (input) => {
      if (input.trim() == "") {
        return "School is required.";
      } else {
        return true;
      }
    },
    when: (answers) => {
      // only ask for age if name is provided
      return answers.menu == "Add an Intern";
    },
  },
];
