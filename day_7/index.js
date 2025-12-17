import express,{urlencoded} from 'express'
import { MongoClient } from 'mongodb'

const dbname = "College";
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url)
const app = express();
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
client.connect().then(res => {
    const db = res.db(dbname);
    const collection = db.collection("student");

    app.get('/', async (req, res) => {
        const data = await collection.find().toArray();
        res.render('home', { data })
    })

    app.get('/api', async (req, res) => {
        const response = await collection.find().toArray()
        res.send(response)
    })
    app.get('/addStudent', (req, res) => {
        res.render('addStudent')
    })
    app.post('/insertStudent',(req,res)=>{
        collection.insertOne(req.body)
        res.send(`added successfully`)

    })
})



app.listen(3000);