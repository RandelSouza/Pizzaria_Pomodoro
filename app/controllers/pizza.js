module.exports = (app) => {   
    const Pizza = app.models.pizza;
    const controller = {};        

    controller.adicionar_pizza_page = (req, res) => app.controllers.login.autoriza(req, res, () => res.render('cardapio_pizzas'));

    controller.pizzas = (req, res) => app.controllers.login.autoriza(req, res, () => {
        Pizza.find((err, pizzas) => {            
            if (err) return console.error(err);
            res.json(pizzas);
        });
    });

    controller.adicionar_pizza = (req, res) => app.controllers.login.autoriza(req, res, () => {
        const pizza = new Pizza({
            nome: req.body.nome,
            descricao: req.body.descricao,
            preco: req.body.preco
        });

        pizza.save((err, results) => {
            console.log(results._id);
        });        
    });


    controller.listar_pizzas = (req, res) => app.controllers.login.autoriza(req, res, () => res.render('listar_pizzas'));

    controller.atualizar_pizza = (req, res) => app.controllers.login.autoriza(req, res, () => {
        const id = req.body.id;
        const nome = req.body.nome;
        const preco = req.body.preco;
        const descricao = req.body.descricao;

        Pizza.findByIdAndUpdate(id, { $set: { nome: nome, descricao: descricao, preco: preco } }, (err) => {
            if (err) return console.error(err);
            controller.pizzas(req, res);
        });
    });

    controller.deletar_pizza = (req, res) => app.controllers.login.autoriza(req, res, () => {
        const id = req.params.id;
       
        Pizza.deleteOne({ _id: id }, (err) => {
            if (err) return console.error(err);
            controller.pizzas(req, res);
        });
    });
    
    return controller;
};
