var express = require('express');
var router = express.Router();

var d3 = require("d3"),
    jsdom = require("jsdom");
var express = require('express');

var document = jsdom.jsdom(),
    svg = d3.select(document.body).append("svg");

var sampleData = [
  {branch: "President",
  forecastdate: 10/28/16,
  state: "Utah", 
  Clinton: 30.39541, 
  Trump: 40.11558},
{branch: "President",
  forecastdate: 10/28/16,
  state: "Utah", 
  Clinton: 27.03206, 
  Trump: 38.9474},
{branch: "President",
  forecastdate: 10/28/16,
  state: "Florida", Clinton: 46.77926, Trump: 43.95346},
{branch: "President",
  forecastdate: 10/28/16,
  state: "Ohio", Clinton: 45.83632, Trump: 43.439},
{branch: "President",
  forecastdate: 10/28/16,
  state: "North Carolina", Clinton: 39.83081, Trump: 42.19001},
{branch: "President",
  forecastdate: 10/28/16,
  state: "Ohio", Clinton: 40.75383, Trump: 40.31654},
{branch: "President",
  forecastdate: 10/28/16,
  state: "Utah", Clinton: 37.66415, Trump: 31.16261},
{branch: "President",
  forecastdate: 10/28/16,
  state: "Utah", Clinton: 36.56206, Trump: 35.90994},
{branch: "President",
  forecastdate: 10/28/16,
  state: "North Carolina", Clinton: 41.57375, Trump: 44.39628},
{branch: "President",
  forecastdate: 10/28/16,
  state: "Virginia", Clinton: 49.53602, Trump: 38.04281},
{branch: "President",
  forecastdate: 10/28/16,
  state: "Utah", Clinton: 29.07966, Trump: 38.67707},
{branch: "President",
  forecastdate: 10/28/16,
  state: "Utah", Clinton: 28.19646, Trump: 46.16856},
{branch: "President",
  forecastdate: 10/28/16,
  state: "Wisconsin",
  Clinton: 46.40978, Trump: 37.20346},
{branch: "President",
  forecastdate: 10/28/16,
  state: "North Carolina", 
  Clinton: 43.37402, Trump: 45.3125},
{branch: "President",
  forecastdate: 10/28/16,
  state: "Pennsylvania", Clinton: 44.2688, Trump: 42.77751},
{branch: "President",
  forecastdate: 10/28/16,state: "Ohio", Clinton: 40.14388, Trump: 43.65981},
{branch: "President",
  forecastdate: 10/28/16,state: "New York", Clinton: 57.17519, Trump: 33.47956},
{branch: "President",
  forecastdate: 10/28/16,state: "Utah", Clinton: 27.60047, Trump: 39.68335},
{branch: "President",
  forecastdate: 10/28/16,state: "Michigan", Clinton: 45.79966, Trump: 37.03926},
{branch: "President",
  forecastdate: 10/28/16,state: "Ohio", Clinton: 41.84813, Trump: 43.8168},
{branch: "President",
  forecastdate: 10/28/16,state: "Florida", Clinton: 41.486, Trump: 43.32398},
{branch: "President",
  forecastdate: 10/28/16,state: "New Hampshire", Clinton: 47.81409, Trump: 33.31317},
{branch: "President",
  forecastdate: 10/28/16,state: "Utah", Clinton: 36.22649, Trump: 40.48729},
{branch: "President",
  forecastdate: 10/28/16,state: "Pennsylvania", Clinton: 38.62971, Trump: 43.22314},
{branch: "President",
  forecastdate: 10/28/16,state: "North Carolina", Clinton: 44.6364, Trump: 42.50087},
{branch: "President",
  forecastdate: 10/28/16,state: "Colorado", Clinton: 36.5933, Trump: 44.45737},
{branch: "President",
  forecastdate: 10/28/16,state: "Wisconsin", Clinton: 49.35404, Trump: 36.55305},
{branch: "President",
  forecastdate: 10/28/16,state: "Alabama", Clinton: 37.53621, Trump: 53.42842},
{branch: "President",
  forecastdate: 10/28/16,state: "New Hampshire", Clinton: 46.17157, Trump: 37.48798},
{branch: "President",
  forecastdate: 10/28/16,state: "California", Clinton: 57.48937, Trump: 24.4323},
{branch: "President",
  forecastdate: 10/28/16,state: "North Carolina", Clinton: 42.04498, Trump: 41.34246},
{branch: "President",
  forecastdate: 10/28/16,state: "Utah", Clinton: 32.05808, Trump: 46.10263},
{branch: "President",
  forecastdate: 10/28/16,state: "Wisconsin", Clinton: 46.58131, Trump: 38.38083},
{branch: "President",
  forecastdate: 10/28/16,state: "North Carolina", Clinton: 48.7684, Trump: 41.93993},
{branch: "President",
  forecastdate: 10/28/16,state: "Wisconsin", Clinton: 46.04169, Trump: 39.47638}]
// var polls = require('../Polls.csv');
/* GET home page. */
      console.log("sampleData = " + sampleData[20]);

router.get('/', function(req, res, next) {
      // console.log("sampleData = " + sampleData.state);

// d3.text("Polls.csv", function(data) {
//                 var parsedCSV = d3.csv.parseRows(data);

//                 var container = d3.select("body")
//                     .append("table")

//                     .selectAll("tr")
//                         .data(parsedCSV).enter()
//                         .append("tr")

//                     .selectAll("td")
//                         .data(function(d) { return d; }).enter()
//                         .append("td")
//                         .text(function(d) { return d; });
//             });

// var trans_csv = function()
// {
//     var parse = d3.time.format("%m/%d/%Y").parse;
//     console.log("parse = " + parse);
//     d3.csv("Polls.csv", function(trans)
//     {
//         //prices is an array of json objects containing the data in from the csv
//         console.log("trans:", trans)
//         data = trans.map(function(d)
//         {
//             //each d is one line of the csv file represented as a json object
//             console.log("d", d)
//             branch = d.branch
//             forecastdate = +d.fDate
//             state = d.state
//             trump = +d.trump
//             clinton = +d.clinton
//             return {
//                 //"winter": winter,
//                 //"summer": summer
//                 "value":trump
//             }
//         })
//         console.log("data", data)
//         // bars(data);
//     })
// }
// trans_csv();

// d3.text("Polls.csv", function(data) {

// var parsedCSV = d3.csv.parseRows(data);
// console.log("data = " + data);
// });
d3.csv('Polls.csv', 
  function(d) {
  return {
    branch: d.branch,
  forecastdate:new Date(+d.Year, 0, 1),
  state: d.state,
  trump: +d.trump,
  clinton: +d.clinton  // convert "Length" column to number
  };
       console.log("branch = " + branch);

  // d3.csv(url, row, callback);
});




var dataset = []
d3.csv("Polls.csv", function(data) {
    // parsed = d3.csv.parse(data);

   dataset = data.map(function(d) { return [ d["branch"], +d["forecastdate"], d["state"], +d["trump"], +d["clinton"] ]; });
   console.log("dataset = " + dataset);
});
d3.csv('Polls.csv', function(dataset2) {  // NEW
  dataset2.forEach(function(d) {                    // NEW
  branch = d.branch
  forecastdate = +d.fDate;
  state = d.state;
  trump = +d.trump;
  clinton = +d.clinton    
  console.log("dataset2 = " + dataset2);                       // NEW
  });
});



var test=d3.csv("Polls.csv");

// test = JSON.parse();
console.log("test: "+ test);
  res.render('index', {});
  // console.log("polls = " + polls);
});

module.exports = router;
