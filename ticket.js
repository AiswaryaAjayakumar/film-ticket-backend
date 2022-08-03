const bodyParser = require('body-parser')
var express=require('express')
const  Mongoose  = require('mongoose')
const { ticketModel } = require('./models/ticketmodel')

var app=express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/',(req,res)=>{

    res.send("WELCOME TO BOOK MY SHOW")
})
app.post('/ticket',(req,res)=>{

    var ticketObject= new ticketModel(req.body)
    res.json(ticketObject)

})
app.listen(process.env.PORT||3001,()=>{
    console.log("Server started at http://localhost:3001/")
})