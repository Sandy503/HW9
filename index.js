const inquirer = require("inquirer");
const fs = require('fs');
const ghtml = require("../HW9/generateHTML");
const axios = require('axios')
const util = require("util");
const electron = require("electron")
const electronToHTML = require("electron-to-html")
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

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
        console.log(res.data)
        });
  });


function writeToFile(fileName, data) {
 
}

function init() {

};
init();
