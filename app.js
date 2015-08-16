
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes/event');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

//	Import wiz event module
var event = require('./routes/event');

//	Import wiz sponsor module
var sponsor = require('./routes/sponsor');

//	Import wiz speaker module
var speaker = require('./routes/speaker');

//	Import wiz agenda module
var agenda = require('./routes/agenda');

//	Import wiz contact module
var contact = require('./routes/contact');

//	Import wiz contact module
var register = require('./routes/register');

var app = express();

// all environments
app.set('port', process.env.PORT || 3002);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', event.index);

app.get('/users', user.list);
//	Set Wiz Event Page Route Info
app.get('/event',event.index);

//	Set Wiz Speaker Page Route Info
app.get('/speaker',speaker.index);

//	Set Wiz Sponsor Page Route Info
app.get('/sponsor',sponsor.index);

//	Set Wiz Agenda Page Route Info
app.get('/agenda',agenda.index);

//	Set Wiz Contact Page Route Info
app.get('/contact',contact.index);

//	Set Wiz Register Page Route Info
app.get('/register',register.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
