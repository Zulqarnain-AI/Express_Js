import mongoose from 'mongoose'
import express from 'express'
import stafmodel from './model/stafmodel.js'
const app =express()
mongoose.connect('mongodb://localhost:27017/College').then(()=>{})
app.get('/',async(req,res)=>{
    // await stafmodel.insertOne({id:1,name:'ali hassan',age:43})
    // await stafmodel.deleteOne({id:2}) 
    // await stafmodel.updateOne({id:1},{$set:{id:1,name:"ali jassan",age:52}})
    const data = await stafmodel.find() 

    res.send(data)

})


app.listen(3000)