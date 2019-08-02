module.exports = (app) => {
    var controller = app.controllers.login;

    app.get('/login', controller.login);
    app.post('/login', controller.validacao);
    app.get('/logout', controller.logout);

    app.get('/usuario', controller.usuario);
}
