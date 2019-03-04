var express = require('express');
var path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');
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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(request, response) {
  connection.query('SELECT * FROM posts', function(err, postsRows){
    connection.query('SELECT * FROM users', function(err, usersRows){
      response.render('index', { posts: postsRows, users: usersRows});
    })
  });
});

app.get('/users', function(request, response) {
  connection.query('SELECT * FROM users', function(err, rows){
    response.send(rows);
  });
});

app.get('/posts', function(request, response) {
  connection.query('SELECT * FROM posts', function(err, rows){
    response.send(rows);
  });
});

app.get('/login', function(request, response) {
  response.render('login');
});

app.post('/login', function(request, response) {
  const usernameIn = request.body.username;
  const passwordIn = request.body.password;
  connection.query('SELECT * FROM users WHERE username = "' + usernameIn + '"', function(err, rows){
    if (rows.length === 0) {
      response.status(404).send('User not found');
      return;
    }
    const userObj = rows[0];
    if (passwordIn !== userObj.password) {
      response.status(403).send('Invalid Credentials');
      return;
    }
    response.send(userObj);
  });
});

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
