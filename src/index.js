// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
connectDB();













//ifi or function  and then function call is same ifi is just making and calling imediatedly the function
/*
import express from "express";
const app=express();
;(async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       app.on("errror",(error)=>{
        console.log("ERRR: ",error);
        throw error;
       });

       app.listen(process.env.PORT,()=>{
        console.log((`App is Listening on port: ${process.env.PORT}`));
       })

    } catch (error) {
        console.log("ERROR: ",error);
        throw error;
    }
})()
*/