const express = require ('express');

const path = require ('path');
// const PORT = process.env.PORT || 8080;


// sets up server to parse request body for use
// app.use(express.urlencoded({ extended: true}));
// app.use(express.json());


//=====Routing=====//

module.exports = function (app) {

    app.get('/survey', function(req,res) {
        res.sendFile(path.join(__dirname,"/../public/survey.html"));
    });

    //Default route home
    app.get('*', function (req,res) {
        res.sendFile(path.join(__dirname,"/../public/home.html"));
    });
}



// app.get('/survey', function(req,res){
//     res.send('Survey page');
// })

// app.get('/home.html')