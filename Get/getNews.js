const express = require('express');
const router = express.Router();
const getNewModel = require('./Models/getNewModel')


router.get('/',(req,res)=>{
    var limit = parseInt(req.query.limit)
    if(limit)
        getNewModel.find({},(err,users)=>{
            if(err) res.json({succes:false})
            res.send(users)
        }).limit(limit)
    else
        getNewModel.find({},(err,users)=>{
            if(err) res.json({succes:false})
            res.send(users)
        })
})
router.get('/search',(req,res)=>{
    var search = req.query.search
    if(search){
        getNewModel.find({$or:[{"baslik": { $regex: '.*' + search + '.*',$options: 'i' }},{"icerik":{ $regex: '.*' + search + '.*',$options: 'i' }}]},(err,users)=>{
            if(err) res.json({succes:false})
            res.send(users)
        })
    }else
        res.json({succes:false,message:'Lütfen aranacak kelimeyi belirtin ! '})
    
})
router.get('/id',(req,res)=>{
    var id = req.query.id
    if(id){
        getNewModel.findById(id,(err,users)=>{
            if(err) res.json({succes:false})
            res.send(users)
        })
    }else
        res.json({succes:false,message:"Lütfen aranacak id'yi belirtin ! "})
    
})

module.exports = router