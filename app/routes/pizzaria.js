module.exports = function(app) {
    var controller = app.controllers.pizzaria;
    app.get('/', controller.home);
    //app.post('/login', controller.validacao);
    //app.get('/logout', controller.logout);
}
