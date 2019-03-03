var express = require('express');
var path = require('path');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : ''
});

connection.query('USE cs4417_forum_database');

app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  connection.query('SELECT * FROM users', function(err, rows){
    res.render('index', {users : rows});
  });
});

// what port to run server on
app.listen(3000, function () {
  console.log('Server started on port 3000');
});
