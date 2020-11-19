const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/teknoloji');

let messageSchema = new mongoose.Schema({
  message_id :String,
  kullanici_adi:String,
  message:String,
  begeni:String,
});

let Message = mongoose.model('messages', messageSchema);
module.exports = Message