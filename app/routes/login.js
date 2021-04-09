module.exports = (app) => {
    const controllerLogin = app.controllers.login;

    app.get('/login', controllerLogin.login);
    app.post('/login', controllerLogin.validation);
    app.get('/logout', controllerLogin.logout);

    app.get('/usuario', controllerLogin.usuario);
}
