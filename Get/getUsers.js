const express = require('express');
const router = express.Router();
const md5 = require('md5')
const getUser = require('./Models/getUserModel')

router.get('/',(req,res)=>{
    getUser.find({},(err,users)=>{
        if(err) res.json({succes:false})
        res.send(users)
    })
})
router.get('/control',(req,res)=>{
    var email = req.query.email;
    var sifre = md5(req.query.pass);
    if(email)
        if(sifre)
            getUser.find({$and:[{"email": { $regex: '.*' + email + '.*',$options: 'i' }},{"sifre":{ $regex: sifre }}]},(err,users)=>{
                if(err) res.json({succes:false})
                if(users.length<1)
                    res.json({succes:false})
                else
                    res.json({succes:true,user:users})
            })
        else
            res.json({succes:false,message:"Lütfen aranacak email'i belirtin ! "})
    else
        res.json({succes:false,message:"Lütfen aranacak sifre'yi belirtin ! "})

   
})

module.exports = router