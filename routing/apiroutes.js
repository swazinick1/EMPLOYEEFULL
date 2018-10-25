
//pull required dependencies
const express = require ('express');

const app = express ();
const path = require('path');
// const PORT = 3000;

//import employees list
const employer = require ('../app/data/employer.js');


// //=====Routing=====//

module.exports = function(app){

//Pulls from a list of employers
app.get('/api/employer', function(req,res){
    res.json(employer);
});

// User survey post for results
app.post('/api/employer', function(req,res){
    
    let bestMatch = {
        name: "",
        photo: "",
        scoreDifference: 1000
    };

    //Take results of user survey and parses it
    let userData = req.body;
    let userScores = userData.scores;

    console.log('userScores', req.body);

    //Calculate difference between scores
    let totalDifference = 0;

    //Loop through possible employers
    for (let i = 0; i < employer.length; i++){
        console.log(employer[i]);
        //Total diff = 0

        //Loop through scores of employers
        for (let j = 0; j < employer[i].scores[j]; i++){

            //Calculate difference between scores and add them up
            totalDifference += Math.abs(parseInt(userScores[j])-parseInt(employer[i].scores[j]));
            //???
            // Total diff = 10
            console.log('totalDifference = ' + totalDifference);

            //If sum of difference is less than diff of current match
            if(totalDifference <= bestMatch.scoreDifference) {

                //Reset best match to new employer
                bestMatch.name = employer[i].name;
                bestMatch.photo = employer[i].photo;
                bestMatch.friendDifference = totalDifference;
            }// End total diff statement
        }// End loop through employer scores
    }// End loop through possible employers

    //Save userData to database after check
    employer.push(userData);

    // Return JSON with users best match
    res.json(bestMatch);
});
}
module.exports = app;

