const express = require('express');
const router = express.Router();
const newsModel =require('./Models/newsModel')
router.get('/', async (req, res) => {
    var baslik = req.query.baslik;
    var icerik = req.query.icerik;
    var kategori = req.query.kategori;
    if(baslik)
        if(kategori)
            if(icerik){
                const post = newsModel({
                    baslik,
                    icerik,
                    kategori
                });
                await post
                    .save()
                    .then((pos) => {
                    res.send({data:pos,success:true,mesaj:'Eklendi.'});
                    })
                    .catch(async (err) => {
                    res.send(400, {success:false});
                    });
            }
            else   
                res.json({'succes':false,message:'Lütfen içerik belirtin !'})
        else
        res.json({'succes':false,message:'Lütfen kategori belirtin !'})

    else
        res.json({'succes':false,message:'Lütfen başlık belirtin !'})
})

module.exports = router