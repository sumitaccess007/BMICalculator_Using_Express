const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res){
   res.sendFile(__dirname + "/calculator.html");
});

app.post("/", function (req, res) {
   var number1 = Number(req.body.number1);
   var number2 = Number(req.body.number2);
   var addResult = number1 + number2;
   res.send("Addition of " + number1 + " and " + number2 + " is : " + addResult);
});


app.get("/bmicalculator", function (req, res){
   res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
   var height = parseFloat(req.body.height);
   var weight = parseFloat(req.body.weight);
   var bmi = weight / (height * height);
   res.send("Your BMI is : " + bmi);
});

app.listen(3000, function (){
   console.log("Express Server is running on port : 3000");
});