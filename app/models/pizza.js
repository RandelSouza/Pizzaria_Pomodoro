var mongoose = require('mongoose');
var SchemaTypes = mongoose.Schema.Types;

module.exports = () => {    
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        preco: {
            type: SchemaTypes.Decimal128,
            required: true
        }
    });

    return mongoose.model('Pizza', schema);   
};
