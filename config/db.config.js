// config/db.config.js

const mongoose = require('mongoose');
const URI = require('./credentials');

mongoose.connect(process.env.MONGODB_URI || URI, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 useCreateIndex: true
});

// When successfully connected
mongoose.connection.on('connected', () => {
 console.log('Established Mongoose Default Connection');
});

// When connection throws an error
mongoose.connection.on('error', err => {
 console.log('Mongoose Default Connection Error : ' + err);
});