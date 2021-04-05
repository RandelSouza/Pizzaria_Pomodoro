const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

module.exports = () => {
    var app = express();

    // Configurações
    app.set('port', 3001);
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    // Middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(express.static('./app/views/public'));
    app.use(cookieParser());

    app.use(session({
        secret: 'keyboard cat',
        resave: true,
        saveUninitilized: true
    }));

    consign({cwd: 'app'})
        .include('models')
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
};
