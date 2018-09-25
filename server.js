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
    //let data = GetDataFromFile(fileAnimationConfigs);
    let data = {"root":{"NextStart":"08/08/2018 00:04:25","GameId":"8855522255","CurrentScene":"RenderCountdownScene","NextNumbers":"10,26,36,47,2,53,15,28,65,80,22,19,5,1,49,41,70,20,58,45","PreviusGameNumbers":{"numbers":["25,50,59,21,45,63,7,75,58,52,47,34,70,57,38,37,11,60,65,18","29,26,71,75,70,8,33,23,30,74,59,17,27,18,60,51,40,41,6,69","49,40,8,3,1,32,68,9,14,18,4,46,24,22,37,54,55,50,48,42"]},"SceneTime":{"RenderLastThreeResultsScene":"25","RenderStatisticsScene":"10"}}}
    res.json(data);
});

function GetDataFromFile(xmlFile){
    const xml = fs.readFileSync(xmlFile, 'utf-8')
    //this returns json and log it
    var json = parserJS.toJson(xml)

    let jsObject = JSON.parse(json);
    return jsObject;
}


