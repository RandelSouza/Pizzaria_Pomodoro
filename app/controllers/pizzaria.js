module.exports = (app) => {
        var hash = require('object-hash');
        //var Pizzaria = app.models.pizzaria exemplo;
        var controller = {};

        controller.home = (req, res) => app.controllers.login.autoriza(req, res, () => res.render('home'));
        
        controller.about_us = (req, res) => app.controllers.login.autoriza(req, res, () => res.render('sobre_nos')); 
        
        controller.cardapio_pizzas = (req, res) => app.controllers.login.autoriza(req, res, () => res.render('cardapio_pizzas'));
        controller.cardapio_bebidas = (req, res) => app.controllers.login.autoriza(req, res, () => res.render('cardapio_bebidas'));
        
        return controller;
};
