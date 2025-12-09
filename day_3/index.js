import express from 'express';
import path from 'path'

const app = express();
    const abspath = path.resolve('pages')

    // middleware
function checkRoute(req,res,next){
    console.log(req.url);
    next();

}
app.use(checkRoute)


app.get('/',(req,res)=>{
    res.sendFile(abspath+"/home.html");
})
app.get('/about',(req,res)=>{
    res.sendFile(abspath+"/about.html");
})
app.use((req,res)=>{
    res.status(404).sendFile(abspath+"/pageNotFound.html")
})

app.listen(3000);