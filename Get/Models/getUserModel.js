const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/teknoloji');

let userSchema = new mongoose.Schema({
  adi_soyadi :String,
  email:String,
  kullanici_adi:String,
  sifre:String
});

let Users = mongoose.model('users', userSchema);
module.exports = Users