module.exports = (app) => {
    var controllerPizzaria = app.controllers.pizzaria;

    app.get('/', controllerPizzaria.home);  
    app.get('/sobre_nos', controllerPizzaria.about_us);                   
};
