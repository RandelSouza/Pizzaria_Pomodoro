module.exports = (app) => {
        var hash = require('object-hash');
        var Pizza = app.models.pizza;

        var controller = {};

        controller.home = (req, res) => app.controllers.login.autoriza(req, res, () => res.render('home'));
        
        controller.about_us = (req, res) => app.controllers.login.autoriza(req, res, () => res.render('sobre_nos')); 
        
        controller.adicionar_pizza_page = (req, res) => app.controllers.login.autoriza(req, res, () => res.render('cardapio_pizzas'));
        
        controller.adicionar_pizza = (req, res) => app.controllers.login.autoriza(req, res, () => {                        
            var pizza = new Pizza({
                nome: req.body.nome,
                descricao: req.body.descricao,
                preco: req.body.preco
            });

            pizza.save(function (err, results) {
                console.log(results._id);
            });

            res.redirect('/adicionar_pizza');
        });
                             
        
        controller.listar_pizzas = (req, res) => app.controllers.login.autoriza(req, res, () => res.render('listar_pizzas'));

        controller.cardapio_bebidas = (req, res) => app.controllers.login.autoriza(req, res, () => res.render('cardapio_bebidas'));
        
        return controller;
};
