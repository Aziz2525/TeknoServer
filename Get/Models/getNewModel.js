const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/teknoloji');

let newsSchema = new mongoose.Schema({
  baslik :String,
  icerik:String,
  kategori:String
});

let News = mongoose.model('news', newsSchema);
module.exports = News