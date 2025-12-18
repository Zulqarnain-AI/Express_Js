import { urlencoded } from "express"
import express from "express"
import { MongoClient, ObjectId } from "mongodb"

const app = express()
const url = "mongodb://localhost:27017/"
const dbname = "College"
const client = new MongoClient(url)

app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
client.connect().then((res)=>{
    const db = res.db(dbname)
    const collection = db.collection("student")
    app.get('/',async(req,res)=>{
        const data = await collection.find().toArray()
        res.render('home',{data})
    })
    app.get('/delete/:id',async(req,res)=>{
        
        const response = await collection.deleteOne({_id: new ObjectId(req.params.id)})
        const data = await collection.find().toArray()
        res.render('home',{data})

    })
    app.get('/add',(req,res)=>{
        res.render('add_student',{message:""})
    })
    app.post('/insert',async(req,res)=>{
        await collection.insertOne(req.body)
        const data = await collection.find().toArray()
        res.render('add_student',{message:"new student added"})

    })
})

app.listen(3000)