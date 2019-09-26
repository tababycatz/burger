var connection = require("./connection.js");

var orm = {
    select: function(whatToSelect, tableInput) {
      var queryString = "SELECT ?? FROM ??";
      connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    }
}; // closing curly for orm var //