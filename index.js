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
      name: "username",
      message: "What is your Github username?"
    }   
  ]).then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;
    axios.get(queryUrl).then(function(res) {
        
        });
  });


function writeToFile(fileName, data) {
 
}

function init() {

};
init();
