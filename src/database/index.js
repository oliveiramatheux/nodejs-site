const mongoose = require("../database");

mongoose.connect('mongodb://localhost/mysite', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true});

mongoose.Promise = global.Promise;

module.exports = mongoose;