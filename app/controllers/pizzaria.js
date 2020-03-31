module.exports = (app) => {
        var hash = require('object-hash');
        var Pizza = app.models.pizza;

        var controller = {};

        controller.home = (req, res) => app.controllers.login.autoriza(req, res, () =>res.render('home'));
        
        controller.about_us = (req, res) => app.controllers.login.autoriza(req, res, () => res.render('sobre_nos')); 
        
        controller.adicionar_pizza_page = (req, res) => app.controllers.login.autoriza(req, res, () => res.render('cardapio_pizzas'));
        
        controller.pizzas = (req, res) => app.controllers.login.autoriza(req, res, () => {
             Pizza.find((err, pizzas) => {
				// console.log(pizzas);
				if (err) return console.error(err);
				res.json(pizzas);
            });
        });           

        controller.adicionar_pizza = (req, res) => app.controllers.login.autoriza(req, res, () => {                        
            var pizza = new Pizza({
                nome: req.body.nome,
                descricao: req.body.descricao,
                preco: req.body.preco
            });

            pizza.save((err, results) => {
                console.log(results._id);
            });

            res.redirect('/adicionar_pizza');
        });
                             
        
        controller.listar_pizzas = (req, res) => app.controllers.login.autoriza(req, res, () => res.render('listar_pizzas'));
        
        controller.atualizar_pizza = (req, res) => app.controllers.login.autoriza(req, res, () => {
            var id = req.body.id;
			var nome = req.body.nome;
            var preco = req.body.preco;
            var descricao = req.body.descricao;
            
            console.log("identificador: " + id);

			Pizza.findByIdAndUpdate(id, {$set: { nome: nome, descricao: descricao, preco: preco} }, (err) => {
				if (err) return console.error(err);
				controller.pizzas(req, res);
			});
        });
        

        controller.deletar_pizza =  (req, res) => app.controllers.login.autoriza(req, res, () => {
            var id = req.params.id;
            Pizza.deleteOne({_id: id}, (err) => {
                if (err) return console.error(err);
				controller.pizzas(req, res);
            });
        });

        controller.cardapio_bebidas = (req, res) => app.controllers.login.autoriza(req, res, () => res.render('cardapio_bebidas'));
        
        return controller;
};
