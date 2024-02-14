import express from 'express'; 
import Connection from './database/db.js';
import Route from './routes/route.js'
import cors from 'cors';
import bodyParser from 'body-parser';
const app=express();


Connection();
app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Route)

const port=8000;

app.listen(port,()=>{
    console.log(`server is runnning on ${port} `)
})