var gzippo = require('gzippo');
var express = require('express');
var app = express();
 
//app.use(express.logger('dev'));
//app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.use('', express.static(__dirname + '/dist'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.listen(process.env.PORT || 5000);


