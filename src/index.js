const express=require ('express')
const mongoose=require('mongoose')
const route=require("./routes/route")
const multer= require('multer')
const app=express()

app.use(express.json())

app.use(multer().any())

mongoose.connect("mongodb+srv://Dishap:gn6kyXLuhnBE1EJK@cluster0.bwp65jf.mongodb.net/group40Database?retryWrites=true&w=majority",{useNewUrlParser:true})
.then(()=>console.log("mongoDb connected"))
.catch(err=>console.log(err))

app.use('/',route)

app.listen(process.env.PORT || 3000,function(){
    console.log('express app running on port'+(process.env.PORT || 3000))
})
