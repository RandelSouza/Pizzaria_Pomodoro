module.exports = function (app) {
        var hash = require('object-hash');
        var Usuario = app.models.usuario;
        var controller = {};

        controller.login = function (req, res) {
            res.render('login');
        };

        controller.logout = function (req, res){
                req.session.destroy();
                res.redirect('login');
        };

        controller.validacao = function (req, res) {
            console.log(req.body.login, hash(req.body.senha));
            Usuario.findOne({login : req.body.login, senha : hash(req.body.senha)}, function (err, login) {
                if (err){
                     return handleError(err);
                };

                if (login){
                    req.session.user = login._id;
                    res.redirect('/')
                };

                else {
                    res.redirect('login');
                };

            });
        };
};
