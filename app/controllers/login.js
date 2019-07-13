module.exports = function (app) {
        var hash = require('object-hash');
        var Usuario = app.models.usuario;
        var controller = {};

        controller.login = function (req, res) {
            //var usuario = new Usuario({login: 'admin', senha : hash(123)});
            //usuario.save();
            res.render('login');
        };

        controller.logout = function (req, res){
                req.session.destroy();
                res.redirect('login');
        };

        controller.validacao = function (req, res) {
            console.log(req.body.login, hash(req.body.senha));
            Usuario.findOne({login : req.body.login, senha : hash(req.body.senha)}, function (err, login) {
                console.log(login);
                if (err){
                     return handleError(err);
                }

                if (login){
                    req.session.user_name = login.login;
                    req.session.user_id = login._id;
                    res.redirect('/')
                }
                else {
                    res.redirect('login');
                }

            });
        };

        controller.autoriza = function(req, res, callback_function){
            if(req.session.user_id == undefined){
                req.session.destroy();
                res.redirect('login');
            }else {
                callback_function();
            }
        };

        controller.usuario =  function(req, res){
            app.controllers.login.autoriza(req, res, function() {
                res.json(req.session.user_name);
            });
        };
        return controller;
};
