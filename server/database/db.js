import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const USERNAME=process.env.DB_USERNAME
const PASSWORD=process.env.DB_PASSWORD

 const Connection=()=>{
    
    const MONGODB_URI=`mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.poeq6j3.mongodb.net/test`

    mongoose.connect(MONGODB_URI,
        {
            useNewUrlParser:true
        })
    mongoose.connection.on('connected',()=>{
        console.log('databases connected successfully ');
    })   
    mongoose.connection.on('disconnected',()=>{
        console.log('databases disconnected successfully ');
    }) 
    mongoose.connection.on('error',()=>{
        console.log('error while connecting db ',error.message);
    })

}

export default Connection;