var log = require('./log.js');
var fs = require('fs');

exports.DoBoom = function(app) {
  app.get( '*' , function(req, res) {
    res.status(403).end();
  });
  app.post( '/report/:key' , function(req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    var d = new Date();
    var ds = d.toUTCString();
    try {
      fs.appendFile('archive/' + req.params.key + '.log', ds + '\t' + req.ip + '\t' + req.body + '\n');
      fs.appendFile('archive/' + req.params.key + '.json', ',' + req.body + '\n');
      log.info(ds + '\t' + req.params.key + '\t' + req.ip + '\t' + req.body);
    } catch (err) {
      log.err(err);
    }
  });
};
