var express = require('express');
var path = require('path');
var ejs = require('ejs');

var app = express();

app.get('/', function (req, res) {
    res.render('index');
});

//设置views路径和模板
app.set('views', './client/view');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use('/client/static', express.static(path.join(__dirname, 'client/static')));

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listen at http://%s:%s', host, port);
});