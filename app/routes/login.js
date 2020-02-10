module.exports = (app) => {
    var controller = app.controllers.login;

    app.get('/login', controller.login);
    app.post('/login', controller.validation);
    app.get('/logout', controller.logout);

    app.get('/usuario', controller.usuario);
}
