module.exports = (app) => {
    const controllerPizza = app.controllers.pizza;
          
    app.post('/adicionar_pizza', controllerPizza.adicionar_pizza);
   
    app.get('/listar_pizzas', controllerPizza.listar_pizzas);
    app.get('/pizzas', controllerPizza.pizzas);   
    
    app.put('/pizza/atualizar', controllerPizza.atualizar_pizza);
    app.delete('/pizza/:id', controllerPizza.deletar_pizza);        
}
