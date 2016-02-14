var app = require('express')();
var bodyParser = require('body-parser');
var log = require('./controllers/log.js');
var routes = require('./controllers/router.js');

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'jade');
app.set('views', './views');

routes.DoBoom(app);
var server = app.listen(14000, function () {
  log.debug('server: Listening at port ' + server.address().port);
});
