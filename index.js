//this is the intro server file

var app = require('./server/configuration.js');

var port = process.env.PORT || 8000;

app.listen(port);
console.log('Server now listening on port ' + port);

