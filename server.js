// const mysql= require('mysql');
const path = require('path');
const express = require('express');
const app = express();
// const inquirer = require ('inquirer');
const PORT = process.env.PORT || 8080;

//Sets server up to parse request body for use
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Sets server to use public directory for static assets
app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.static("app/data/public"));


//routes
require('./routing/apiroutes.js')(app);

require('./routing/htmlRoutes.js')(app);


//Start server on predefined port
app.listen(PORT, function(){
    console.log(`App is now listening on PORT ${PORT}`)
})