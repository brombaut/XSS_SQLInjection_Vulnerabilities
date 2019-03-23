var express = require('express');
var path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  multipleStatements: true
});

connection.query('USE cs4417_forum_database');

app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());





app.get('/', function(request, response) {
  connection.query('SELECT * FROM posts', function(err, postsRows){
    connection.query('SELECT * FROM users', function(err, usersRows){
      response.render('index', { posts: postsRows, users: usersRows});
    })
  });
});





app.get('/search', function(request, response) {
  response.render('search');
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

app.post('/posts', function(request, response) {
  const contentIn = request.body.content;
  const createdBy = request.body.createdBy;
  connection.query(
    'INSERT INTO posts (content, createdBy) VALUES (?, ?)',
    [contentIn, createdBy],
    function(err, result) {
      response.status(201).send({ status: 'Created' });
    });
});

/*

Example successfull SQL injection

' UNION (SELECT 1,2,3 FROM dual); -- 

' UNION (SELECT TABLE_NAME, TABLE_SCHEMA, 3 FROM information_schema.tables); -- 

' UNION (SELECT COLUMN_NAME, 2, 3 FROM information_schema.columns WHERE TABLE_NAME = 'users'); -- 

' UNION (SELECT username, password, first_name FROM users); -- 

*/
app.get('/posts/:searchString', function(request, response) {
  const searchVal = request.params.searchString;
  connection.query(
    "SELECT id, createdBy, content FROM posts WHERE content LIKE '%" + searchVal + "%';",
    function(err, rows){
      if (Array.isArray(rows[0])) {
        response.send(rows[0]);
      } else {
        response.send(rows);
      }
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
      response.status(404).send({ msg: 'User not found' });
      return;
    }
    const userObj = rows[0];
    if (passwordIn !== userObj.password) {
      response.status(403).send({ msg: 'Invalid Credentials' });
      return;
    }
    response.send(userObj);
  });
});

module.exports = app;
