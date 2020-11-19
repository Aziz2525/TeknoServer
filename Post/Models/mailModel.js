const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/teknoloji',{ useUnifiedTopology: true ,useNewUrlParser: true});

const mailSchema = new mongoose.Schema({
    sendingEmail:String,
    emailContent:String,
    createdAt: {type: Date, default: Date.now}

})
const mail = mongoose.model('mails',mailSchema);
module.exports = mail;