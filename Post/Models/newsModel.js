const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/teknoloji',{ useUnifiedTopology: true ,useNewUrlParser: true});

const NewsSchema = new mongoose.Schema({
    baslik:String,
    icerik:String,
    kategori:String,
    createdAt: {type: Date, default: Date.now}
})
const News = mongoose.model('News', NewsSchema);
module.exports = News
