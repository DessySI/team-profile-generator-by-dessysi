module.exports = [
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
  },
  {
    name: "officeNumber",
    message: "Add Office number? ",
    type: "input",
    validate: (input) => {
      if (input.trim() === "") {
        return "Office number is required.";
      } else {
        return true;
      }
    },
  },
];
