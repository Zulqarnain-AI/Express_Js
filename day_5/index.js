import express from 'express'
import { MongoClient } from 'mongodb'
const dbname = "College";
const url = "mongodb://localhost:27017/"

const client = new MongoClient(url)
const app = express();

client.connect().then(res => {
    const db = res.db(dbname)
    app.get('/api', async (req, res) => {
        const collection = db.collection('student')
        const result = await collection.find().toArray();
        res.send(result)
    })
    app.get('/ui', async (req, res) => {
        const collection = db.collection('student')
        const result = await collection.find().toArray();
        res.render('home',{result})
    })
})
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('home')
});

app.listen(300);