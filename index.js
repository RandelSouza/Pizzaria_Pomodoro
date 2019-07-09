// Carregando modulos. uri mongodb da pizzaria
var uri = 'mongodb://localhost/pizzaria'
var app = require('./config/express')();

require('./config/database')(uri)

// Inicialização do servidor
app.listen(app.get('port'), function(){
    console.log('Server running in port: ' + app.get('port'));
});
