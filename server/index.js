import express from 'express';
import Connection from './database/db.js';
import cors from 'cors';
import Routes from './routes/routes.js'
// import bodyParser from 'body-parser';

const app=express();

app.use(cors());
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use('/',Routes)

const PORT=8000;

Connection();

app.listen(PORT,()=>{
    console.log(`server is running on port : ${PORT}`);
})


