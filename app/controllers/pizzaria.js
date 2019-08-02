module.exports = (app) => {
        var hash = require('object-hash');
        //var Pizzaria = app.models.pizzaria;
        var controller = {};

        controller.home = (req, res) => app.controllers.login.autoriza(req, res, () => res.render('home'));
        
        return controller;
};
