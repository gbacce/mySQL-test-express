var express = require('express');
var router = express.Router();


// Include the mysql module
// 		It is NOT a part of core. It has been npm installed.
// 		It is NOT MySQL. It is a module that goes between node.js and MySQL.

var mysql = require('mysql');


var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'x',
  password : 'x',
  database : 'classicmodels' 
});


connection.connect(function(error){
	if(error) {
		console.log(error.stack);
		return;
	}
	console.log("Connected as ID " + connection.threadId)
})

router.get('/', function(req, res, next) {

	var selectQuery = 'SELECT * FROM customers';
	connection.query(selectQuery, (error, results, fieldsChanged)=>{
		if(error) throw error;
		console.log(results);
		res.render('index', {results: results });
	});

  res.render('index', { title: 'Express' });
});


module.exports = router;
