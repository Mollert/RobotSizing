
var express = require("express");
var request = require("request");
var exphbs = require("express-handlebars");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var router = express.Router();
var port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname ,"public")));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname ,"views"));

var routes = require("./controllers/allOther-controller.js");
var routesPick = require("./controllers/pickRobot-controller.js");

app.use("/", routes);
app.use("/moreDetails", routes);
app.use("/contact", routes);
app.use("/", routesPick);

app.listen(port, function() {
  console.log("Tuned In and Turned On to port " + port);
});
