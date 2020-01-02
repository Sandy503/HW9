const inquirer = require("inquirer");
const fs = require('fs');
const ghtml = require("../HW9/generateHTML");

inquirer.prompt([
    {
        type: "list",
        message: "What is your favorite color?",
        name: "color",
        choices: [
          "green",
          "blue",
          "pink",
          "red"
        ]
      },
    {
      type: "input",
      name: "name",
      message: "What is your Github username?"
    }   
  ]).then(function(data) {
      
  });


function writeToFile(fileName, data) {
 
}

function init() {

};
init();
