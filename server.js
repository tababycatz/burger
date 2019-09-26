// boilerplate //
var exphbs = require("express-handlebars");
var express = require("express");
var mysql = require("mysql");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "quotes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// index.handlebars to root route //
app.get("/", function(req, res) {
    connection.query("SELECT * FROM quotes;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      res.render("index", { quotes: data });
    });
  });