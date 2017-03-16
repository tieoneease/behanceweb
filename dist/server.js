var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var app = express()
var axios = require('axios')
var jsonfile = require('jsonfile')

app = express();
app.use(serveStatic(__dirname));
var port = process.env.PORT || 5000;

//var fileURL = './data.json'
//var cachedData = require('./data.json')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const BASE_URL = 'http://www.behance.net/v2'
//const API_KEY = 'TC4iMKLEasvhlXHID8WE4Wg7cLBNHPIH'
const API_KEY = 'dFPP4SSKThvd1avOMtwb4v8opsz8Ft78'
const client_id = '?client_id=' + API_KEY + '&per_page=25'

function endpointURL(endpoint) {
  return BASE_URL + endpoint + client_id
}

function writeFile(file, data) {
  jsonfile.writeFile(file, data, function (err) {
    if (err) console.error(err)
    else console.log('file written')
  })
}

function prettyPrint(json) {
  console.log(JSON.stringify(json, null, 4))
}

app.get('/user', function (req, res) {
  axios.get(endpointURL('/users/achen041bd2/projects'))
    .then(response => {
      res.send(response.data)
    })
    .catch(error => {
      console.log('error', error)
    })
})

app.get('/projects/:projectId', function (req, res) {
  axios.get(endpointURL('/projects/' + req.params.projectId))
    .then(response => {
      res.send(response.data)
    })
    .catch(error => {
      console.log('error', error)
    })
})

app.listen(8080, function () {
  console.log('Example app listening on port ' + 8080)
})
