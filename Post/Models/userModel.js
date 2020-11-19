const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/teknoloji',{ useUnifiedTopology: true ,useNewUrlParser: true});

const UserSchema = new mongoose.Schema({
    adi_soyadi:String,
    email:String,
    kullanici_adi:{
        type:String,
        unique:true
    },
    sifre:String
})
const Users = mongoose.model('Users', UserSchema);
module.exports = Users
