// This JavaScript file import data from another script file named 'data-for-script'.
// Whenever the user requested the data using the 'require' function, the address of file within the function is called and whatever is allowed to export in that file using 'module.exports' command. 
// The data called, is then stored in varible 'data' and then displayed.

// var data = require('./data-for-script');
// var a = 2;
// console.log("Hello,", data.name);
// console.log("Please confirm the following details are true!")
// console.log(data, '\n');

// console.log("***********************************************************************");

// Here is an example of using an npm package named 'one-liner-joke'
// To install any npm package, just open terminal and type "npm i <package_name>"
// var oneLinerJoke = require('one-liner-joke');
// console.log(oneLinerJoke.getRandomJoke());

// Another npm package 
var figlet = require("figlet");
figlet("Aditya Raj Lodhi", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

//ROUTING - GET & POST

const express = require('express')
const app = express()

app.use(function(req, res, next){
  console.log("This is Middleware 1");
  next();
});
app.use(function(req, res, next){
  console.log("This is Middleware 2");
  next();
});

app.get('/', function (req, res) {
  res.send('Welcome to the Website of Aditya Raj Lodhi')
});
app.get('/profile', function (req, res) {
  res.send('WELCOME TO MY PROFILE')
});

app.listen(3000);
