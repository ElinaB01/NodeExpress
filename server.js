const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    //res.send('Hello World');
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    let num1 = parseInt(req.body.number1);
    let num2 = parseInt(req.body.number2);
	let sum = num1 + num2;
	res.send('The sum of ' + num1 + " and " + num2 + " is " + sum);
    //res.status(204).send();
});

app.get('/contact', function (req, res) {
    res.send('elina0291@gmail.com');
});

 app.listen(3000, function() {
    console.log("Server is running on Port 3000");
 });