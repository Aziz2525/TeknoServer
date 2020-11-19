const express = require('express');
const router = express.Router();
const getMessageModel = require('./Models/getMessageModel')


router.get('/',(req,res)=>{
    getMessageModel.find({},(err,users)=>{
        if(err) res.json({succes:false})
        res.send(users)
    })
})
router.get('/search',(req,res)=>{
    var search = req.query.search
    if(search){
        getMessageModel.find({$or:[{"message": { $regex: '.*' + search + '.*',$options: 'i' }},{"kullanici_adi":{ $regex: '.*' + search + '.*',$options: 'i' }}]},(err,users)=>{
            if(err) res.json({succes:false})
            res.send(users)
        })
    }else
        res.json({succes:false,message:'Lütfen aranacak kelimeyi belirtin ! '})
    
})


module.exports = router