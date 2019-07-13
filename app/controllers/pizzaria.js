module.exports = function (app) {
        var hash = require('object-hash');
        //var Pizzaria = app.models.pizzaria;
        var controller = {};

        controller.home = function (req, res) {
            res.render('home');
        };

        return controller;
};
