module.exports = (app) => {
    //var hash = require('object-hash');
    var Pizza = app.models.pizza;
    var controller = {};
    
    controller.home = (req, res) => app.controllers.login.autoriza(req, res, () => res.render('home'));
    controller.about_us = (req, res) => app.controllers.login.autoriza(req, res, () => res.render('sobre_nos'));    

    return controller;
};
