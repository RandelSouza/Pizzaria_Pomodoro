var mongoose = require('mongoose');

module.exports = function(uri){

    mongoose.connect(uri, {useMongoClient: true});

    mongoose.connection.on('connected', function(){
        console.log('Mongoose Conection Sucess! URI: ' + uri);
    });

    mongoose.connection.on('disconnected', function(){
        console.log('Mongoose Disconnection Sucess! URI: ' + uri);
    });

    mongoose.connection.on('error', function(error){
        console.log('Mongoose error in the connection. ERROR: ' + error);
    });

    process.on('SIGINT', function(){
        mongoose.connection.close(function() {
            console.log('Disconnection from Mongoose. SIGINT flag action.');
            process.exit(0);
        });
    });
};
