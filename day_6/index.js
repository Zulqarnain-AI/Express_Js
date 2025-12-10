import express, { urlencoded } from 'express'
import { MongoClient } from 'mongodb'
const app = express()
app.use(express.urlencoded({extended:true}))
const dbname = "College";
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url)

app.set('view engine','ejs');
client.connect().then((res) => {
    const db = res.db(dbname)
    const collection = db.collection('student')
    app.get('/', async (req, res) => {
        const data = await collection.find().toArray();
        res.render('home', { data })
    })
    app.get('/api',async (req,res)=>{
        const result = await collection.find().toArray()
        res.send(result)
    })
    app.get('/add',(req,res)=>{
        res.render('add_studen')
    })
    app.post('/add_student',async (req,res)=>{
        collection.insertOne(req.body)
        res.send('added succesfully...')
    })
})

app.listen(3000)