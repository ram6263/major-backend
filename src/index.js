// require('dotenv').config({path:'./env'})
import mongoose from "mongoose";
import dotenv from 'dotenv';
import { DB_NAME } from "./constant.js";
import connectDB from "./db/index.js";

dotenv.config({
    path:'../env'
})
connectDB()





/*
import express from 'express';
const app=express();

;(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", () =>{ 
            console.log('Error', error);
            throw error
        });
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })
        
    }catch(error){
        console.log("Error: ",error)
        throw err
    }
})()
*/