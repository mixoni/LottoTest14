'use strict';

var path = require('path'),
    express = require('express'),
    fs = require('fs'),
    parse  = require('xml-parser'),
    moment = require('moment'),
    momentTimezone = require('moment-timezone'),
    fs = require('fs'),
    dateFromat = 'dd/mm/yyyy hh:mm:ss',
    xml2js = require('xml2js'),
    parserJS = require('xml2json'),
    xml2jsParser = xml2js.parseString;
var convert = require('xml-js');
    //util = require('util');

var currentScene,
    countdDownTimer = 0,
    nextNumbers,
    numbersInProgress,
    //currentSelectedNumbers = [1,2,33,14,5,36,27,8,19,30,21,12,39,40,15,6,17,38,9,24];
    currentSelectedNumbers = [10,26,36,47,2,53,15,28,65,80,22,19,5,1,49,41,70,20,58,45];


var parser = new xml2js.Parser(),
    xmlBuilder = new xml2js.Builder();

var app = express();

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

var fileAnimationConfigs = staticPath + "XMLFiles\\animation-configs.xml"; 

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 3000);
 
var server = app.listen(app.get('port'), function() {    
    console.log("server start on port" + app.get('port'));
});

app.get("/api/GetNumbers", function (req, res) {
      res.json({ numbers: currentSelectedNumbers}) 
});

app.get("/api/GetData", (req, res) => {
    let data = GetDataFromFile(fileAnimationConfigs);
    //let data = {"root":{"NextStart":"08/08/2018 00:04:25","GameId":"8855522255","CurrentScene":"RenderCountdownScene","NextNumbers":"1,2,33,14,5,36,27,8,19,30,21,12,39,40,15,6,17,38,9,24","PreviusGameNumbers":{"numbers":["5,21,38,25,11,6,16,29,24,35,9,22,33,1,14,36,3,15,35,8","14,37,31,11,10,22,28,19,17,26,30,10,4,31,4,11,15,15,20,24","6,24,9,16,6,29,17,4,29,6,22,30,15,2,38,32,33,25,14,5"]},"SceneTime":{"RenderLastThreeResultsScene":"15","RenderStatisticsScene":"10"}}}
    res.json(data);
});

function GetDataFromFile(xmlFile){
    const xml = fs.readFileSync(xmlFile, 'utf-8')
    //this returns json and log it
    var json = parserJS.toJson(xml)

    let jsObject = JSON.parse(json);
    return jsObject;
}


