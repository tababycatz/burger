// boilerplate //
var exphbs = require("express-handlebars");
var express = require("express");
var mysql = require("mysql");
var app = express();
var PORT = process.env.PORT || 8080;
var routes = require("./controllers/burgers_controller.js");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
