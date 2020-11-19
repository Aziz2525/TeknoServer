const app = require('express')();
const cors = require('cors')
const addNews = require('./Post/addNews')
const addUsers = require('./Post/addUsers')
const addMessage = require('./Post/addMessage')
const addMail = require('./Post/addMail')
const getUsers = require('./Get/getUsers')
const getNews = require('./Get/getNews')
const getMessages = require('./Get/getMessages')
const getMails = require('./Get/getMails')
const dotenv = require('dotenv');
dotenv.config();
app.use(cors())
app.use('/',(req,res,next)=>{
    var token = req.query.token;
    if(process.env.TOKEN == token)
        next()
    else
        res.json({'succes':false,'message':'Lütfen geçerli bir token değeri girin !'})
})
app.use('/addNews',addNews)
app.use('/addUsers',addUsers)
app.use('/addMessage',addMessage)
app.use('/addMail',addMail)
app.use('/getUsers',getUsers)
app.use('/getNews',getNews)
app.use('/getMessages',getMessages)
app.use('/getMails',getMails)

app.listen(process.env.PORT,()=>console.log("Server Çalışıyor"))