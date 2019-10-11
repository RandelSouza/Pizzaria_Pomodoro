var mongoose = require('mongoose');

module.exports = (uri) => {
    mongoose.connect(uri, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => console.log('Mongoose Conection Sucess! URI: ' + uri));
    mongoose.connection.on('disconnected', () => console.log('Mongoose Disconnection Sucess! URI: ' + uri));
    mongoose.connection.on('error', error => console.log('Mongoose error in the connection. ERROR: ' + error));

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Disconnection from Mongoose. SIGINT flag action.');
            process.exit(0);
        });
    });
};
