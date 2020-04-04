module.exports = (app) => {
    var controller = app.controllers.bebida;

    app.get('/bebidas', controller.cardapio_bebidas);    

}
