'use strict';

var path = require('path');
var fs = require('fs');
var http = require('http');
var opener = require('opener');

module.exports = function(script){

  var index = fs.readFileSync(path.join(__dirname, './shoo.html'));
  var port = process.env.PORT || 3000;

  var sendScript = function(req, res){
    res.setHeader('Content-Type', 'application/javascript');
    res.end(script);
  };

  var sendIndex = function(req, res){
    res.setHeader('Content-Type', 'text/html');
    res.end(index);
  };

  var server = http.createServer(function(req, res){
    req.url === '/main.js' ?
      sendScript(req, res) :
      sendIndex(req, res);
  }).listen(port, function(){
    opener('http://localhost:' + port);
  });

};
