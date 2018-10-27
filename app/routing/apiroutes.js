
//pull required dependencies
const express = require ('express');
const path = require ('path');

// const PORT = 3000;

//import employees list
const employer = require ('../data/employer.js');


// //=====Routing=====//

module.exports = function (app) {
    
    app.get("/api/employer", function (req, res){
        console.log("GET", employer)
        res.json(employer)
    })

    app.post("/api/employer", function (req, res){
        console.log(req.body);

        let randomUser = Math.floor(Math.random() * employer.length)
        res.json(employer[randomUser]);
    });
};

