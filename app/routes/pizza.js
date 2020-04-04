module.exports = (app) => {
    var controller = app.controllers.pizza;
       
   // app.get('/adicionar_pizza', controller.adicionar_pizza_page);
    app.post('/adicionar_pizza', controller.adicionar_pizza);
   
    app.get('/listar_pizzas', controller.listar_pizzas);
    app.get('/pizzas', controller.pizzas);   
    
    app.post('/pizza/atualizar', controller.atualizar_pizza);
    app.delete('/pizza/:id', controller.deletar_pizza);        
}
