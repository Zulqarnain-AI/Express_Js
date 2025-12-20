import express from 'express'
import { urlencoded } from 'express'
import {MongoClient, ObjectId} from "mongodb"


const app = express()
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))

const url = "mongodb://localhost:27017/"
const dbname = "College"

const client = new MongoClient(url)

client.connect().then(async(res)=>{
    const db = res.db(dbname)
    const collection = db.collection('student')
    
    app.get('/',async(req,res)=>{
        const data = await collection.find().toArray()
        res.render('home',{data})
    })
    app.get('/add_student',(req,res)=>{
        res.render('add_student')
        
    })
    app.post('/insert',async(req,res)=>{
        await collection.insertOne(req.body)
        const data = await collection.find().toArray()
        res.render('home',{data})
    })
    app.get('/delete/:id',async(req,res)=>{
        await collection.deleteOne({_id: new ObjectId(req.params.id)})
        const data = await collection.find().toArray()
        res.render('home',{data})
    })
    app.get('/edit/:id',(req,res)=>{
        const id = req.params.id
        res.render('edit',{id})
    })
    app.post('/update/:id',async(req,res)=>{ 
        const filter = {_id:new ObjectId(req.params.id)} 
        const body = {$set: req.body} 
        const response = await collection.updateOne(filter,body)
        if(response){
                console.log(response)
            const data = await collection.find().toArray()
                res.render('home',{data})
        }
        else{
            const id = req.params.id
            res.render('edit',{id})

        }
    })
})

app.listen(3000)