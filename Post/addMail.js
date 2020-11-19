const express = require('express');
const { model } = require('./Models/messageModel');
const router = express.Router()
const mailModel = require('./Models/mailModel')
router.get('/', async (req,res)=>{
    var sendingEmail = req.query.sendingEmail;
    var emailContent = req.query.emailContent;
        if(sendingEmail)
            if(emailContent){
                const post = mailModel({
                    sendingEmail,
                    emailContent,
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
                res.json({succes:false,message:'Lütfen geçerli bir mail içeriği belirtin !'})
        else
            res.json({succes:false,message:'Lütfen geçerli bir mail belirtin !'})

            
})
module.exports = router