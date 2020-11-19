const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/teknoloji');

let mailSchema = new mongoose.Schema({
    sendingEmail:String,
    emailContent:String
});

let Mail = mongoose.model('Mails', mailSchema);
module.exports = Mail