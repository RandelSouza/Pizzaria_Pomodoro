module.exports = (app) => {
    var Bebida = app.models.bebida;
    var controller = {};

    //controller.adicionar_pizza_page = (req, res) => app.controllers.login.autoriza(req, res, () => res.render('cardapio_pizzas'));
    //controller.cardapio_bebidas = (req, res) => app.controllers.login.autoriza(req, res, () => res.render('cardapio_bebidas'));

    controller.bebidas = (req, res) => app.controllers.login.autoriza(req, res, () => {
        Bebida.find((err, bebidas) => {            
            if (err) return console.error(err);
            res.json(bebidas);
        });
    });

    controller.adicionar_bebida = (req, res) => app.controllers.login.autoriza(req, res, () => {
        var bebida = new Bebida({
            nome: req.body.nome,
            tipo: req.body.tipo,
            preco: req.body.preco
        });

        bebida.save((err, results) => {
            console.log(results._id);
        });        
    });

    controller.listar_bebidas = (req, res) => app.controllers.login.autoriza(req, res, () => res.render('listar_bebidas'));

    controller.atualizar_bebida = (req, res) => app.controllers.login.autoriza(req, res, () => {
        var id = req.body.id;
        var nome = req.body.nome;
        var preco = req.body.preco;
        var tipo = req.body.tipo;

        Bebida.findByIdAndUpdate(id, { $set: { nome: nome, tipo: tipo, preco: preco } }, (err) => {
            if (err) return console.error(err);
            controller.bebidas(req, res);
        });
    });

    controller.deletar_bebida = (req, res) => app.controllers.login.autoriza(req, res, () => {
        var id = req.params.id;
       
        Bebida.deleteOne({ _id: id }, (err) => {
            if (err) return console.error(err);
            controller.bebidas(req, res);
        });
    });
   
    return controller;
};
