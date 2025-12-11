import express from 'express'
import {MongoClient} from 'mongodb'
const dbname= "College";
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url)
const app = express();
app.set('view engine','ejs')
client.connect().then(res=>{
    const db=res.db(dbname);
    const collection = db.collection("student");

    app.get('/',async(req,res)=>{
        const data = await collection.find().toArray();
        res.render('home',{data})
    })
})



app.listen(3000);