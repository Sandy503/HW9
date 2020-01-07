const inquirer = require("inquirer");
const fs = require('fs');
const generateHTML = require("./generateHTML");
const axios = require('axios')
const util = require("util");
const electron = require("electron")
const electronToHTML = require("electron-html-to")
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

questions = () => {
  return inquirer.prompt([
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
  ]).then(function(data) {
    const queryUrl = `https://api.github.com/users/${data.username}`;
    const gitStars = `https://api.github.com/users/${data.username}/starred`;
    axios.get(queryUrl).then( (res) => {
      axios.get(gitStars).then( (stars) => {

        html = generateHTML(data, res, stars);
          writeFileAsync("newProfile.html", html);
    
        }).then( () => {
          readFileAsync("newProfile.html", "utf8")
    
        });
    
         });
         
      })
    };
questions();