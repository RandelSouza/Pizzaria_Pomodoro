module.exports = (app) => {
    var hash = require('object-hash');
    var Usuario = app.models.usuario;
    var controller = {};

    controller.login = (req, res) => res.render('login');

    controller.logout = (req, res) => {
        req.session.destroy();
        res.redirect('login');
    };

    controller.validation = (req, res) => {
        console.log(req.body.login, hash(req.body.senha));
        
        //var user = new Usuario({
        //    login: 'admin',
        //    senha: hash('123')
        //});
        // codigo exemple de inserção de um novo usuário
        //user.save(function (err, results) {
        //    console.log(results._id);
        //});
        
        Usuario.findOne({login : req.body.login, senha : hash(req.body.senha)}, (err, login) => {
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

    controller.autoriza = (req, res, callback_function) => {
        if(req.session.user_id == undefined){
            req.session.destroy();
            res.redirect('login');
        }else {
            callback_function();
        }
    };

    controller.usuario = (req, res) => app.controllers.login.autoriza(req, res, () => res.json(req.session.user_name));       
    
    return controller;
};
