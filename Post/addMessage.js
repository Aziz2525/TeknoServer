const express = require('express');
const { model } = require('./Models/messageModel');
const router = express.Router()
const messageModel = require('./Models/messageModel')
router.get('/', async (req,res)=>{
    var message = req.query.message;
    var message_id = req.query.message_id;
    var kullanici_adi = req.query.kullanici_adi;
    if(message)
        if(message_id)
            if(kullanici_adi){
                const post =messageModel({
                    message_id,
                    kullanici_adi,
                    message,
                })
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
                res.json({succes:false,message:'Lütfen geçerli bir kullanıcı adı belirtin !'})
        else
            res.json({succes:false,message:'Lütfen geçerli bir id belirtin !'})
    else
        res.json({succes:false,message:'Lütfen geçerli bir mesaj belirtin !'})
        
            
})
module.exports = router