const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/teknoloji',{ useUnifiedTopology: true ,useNewUrlParser: true});

const messageSchema = new mongoose.Schema({
    message_id:String,
    message:String,
    kullanici_adi:String,
    begeni:String,
    createdAt: {type: Date, default: Date.now}
})
const message = mongoose.model('Messages',messageSchema);
module.exports = message;