const express = require('express');
const router = express.Router()
const md5 = require('md5')
const userModel = require('./Models/userModel')

router.get('/',async (req,res)=>{
    var adi_soyadi = req.query.adi_soyadi;
    var kullanici_adi = req.query.kullanici_adi;
    var email = req.query.email;
    var sifre = md5(req.query.sifre);
    if(adi_soyadi)
        if(kullanici_adi)
            if(email)
              if(sifre){
                  const post = userModel({
                    adi_soyadi,
                    email,
                    kullanici_adi,
                    sifre
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
                  res.json({succes:false,message:'Lütfen bir şifre belirtin !'})
            else
                res.json({succes:false,message:'Lütfen bir kullanıcı adı belirtin !'})
        else
            res.json({succes:false,message:'Lütfen bir kullanıcı adı belirtin !'})
    else
        res.json({succes:false,message:'Lütfen bir adı ve soyadı belirtin !'})

            
})
module.exports = router