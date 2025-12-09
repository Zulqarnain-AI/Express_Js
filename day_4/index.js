import express from 'express';
import { MongoClient } from 'mongodb';

const dbName = 'College';
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url)

const app = express();
app.set('view engine','ejs');
app.get('/',async (req,res)=>{
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('student')
    const result = await collection.find().toArray()
    res.render('home',{result});
})
app.listen(3000)

