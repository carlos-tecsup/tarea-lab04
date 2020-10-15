var express = require('express');
var app = express();
const path = require('path')

app.get('/', function(req, res) {
  res.send('Pagina de Inicio');
});

app.get('/clientes', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'clientes.html'));
  });

app.get('/productos', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'productos.html'));
});

function c_server(req, res){
    var host = server.address().address;
    var port = server.address().port;
    console.log(host + ' : '+port);
}

var server = app.listen(5000,c_server);