module.exports = (app) => {
    var controller = app.controllers.pizzaria;
    app.get('/', controller.home);  
    app.get('/sobre_nos', controller.about_us);    
    app.get('/pizzas', controller.cardapio_pizzas);
     app.get('/bebidas', controller.cardapio_bebidas);    
}
