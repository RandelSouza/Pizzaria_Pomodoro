module.exports = function (app) {
        var hash = require('object-hash');
        //var Pizzaria = app.models.pizzaria;
        var controller = {};

        controller.home = function (req, res) {
            app.controllers.login.autoriza(req, res, function(){
                res.render('home');
            });

        };

        return controller;
};
