// require csvtojson
var csv = require("csvtojson");
const fs = require('fs');

let csvFilePath = "customer-data.csv";
var jsonContent = "";
// Convert a csv file with csvtojson
csv()
.fromFile(csvFilePath)
.on('json', (jsonObj)=>{
  jsonContent = JSON.stringify(jsonObj);
  console.log(jsonContent);
  fs.appendFile("customer-data.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    // console.log("JSON file has been saved.");
  });
  
})