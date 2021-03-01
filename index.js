// Carregando modulos. uri mongodb da pizzaria
const uri = 'mongodb://localhost/pizzaria';
const app = require('./config/express')();

require('./config/database')(uri)

// Inicialização do servidor
app.listen(app.get('port'), () => console.log('Server running in port: ' + app.get('port')));
