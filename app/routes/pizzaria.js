module.exports = (app) => {
    var controller = app.controllers.pizzaria;
    app.get('/', controller.home);  
    app.get('/sobre_nos', controller.about_us);    
}
