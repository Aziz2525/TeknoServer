const express = require('express');
const router = express.Router();
const getMailModel = require('./Models/getMailModel')


router.get('/',(req,res)=>{
    getMailModel.find({},(err,users)=>{
        if(err) res.json({succes:false})
        res.send(users)
    })
})
router.get('/search',(req,res)=>{
    var search = req.query.search
    if(search){
        getMailModel.find({$or:[{"sendingEmail": { $regex: '.*' + search + '.*',$options: 'i' }},{"emailContent":{ $regex: '.*' + search + '.*',$options: 'i' }}]},(err,users)=>{
            if(err) res.json({succes:false})
            res.send(users)
        })
    }else
        res.json({succes:false,message:'Lütfen aranacak kelimeyi belirtin ! '})
    
})


module.exports = router