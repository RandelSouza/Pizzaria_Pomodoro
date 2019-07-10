var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema({
        login: {
            type: String,
            required: true
        },
        senha: {
            type: String,
            required: true
        }
    });
    return mongoose.model('Usuario', schema)
};
