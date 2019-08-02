module.exports = (app) => {
    var controller = app.controllers.pizzaria;
    app.get('/', controller.home);    
}
