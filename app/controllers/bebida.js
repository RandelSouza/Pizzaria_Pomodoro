module.exports = (app) => {
    var Bebida = app.models.bebida;
    var controller = {};

    controller.cardapio_bebidas = (req, res) => app.controllers.login.autoriza(req, res, () => res.render('cardapio_bebidas'));

    return controller;
};
