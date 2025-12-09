
import express from 'express';
import home from './pages/home.js'
import about from './pages/about.js'

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send(home())
})

app.get('/about',(req,res)=>{
    res.send(about())
})

app.listen(port,()=>{
    console.log(`app is listenin at ${port}`)
})