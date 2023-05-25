require('dotenv').config();
const express=require("express");
const mongoose=require("mongoose");
const app=express();
const cors=require("cors");
const PORT=process.env.PORT || 4000;
const travelRouter=require("./AllRouters/AllRouters");
app.use(cors());
app.use(express.json());
app.use("/travel",travelRouter);

// mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.13y3n.mongodb.net/

// Database is Conecting Here

const url=`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.13y3n.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

console.log("Database URL is:",url);
const config={ 
    useNewUrlParser: true, 
    useUnifiedTopology: true
             };

mongoose.connect(url,config)
.then(()=>{
    console.log("DataBase Connection Successfull");
    app.listen(PORT,()=>{
        console.log(`After Connection DataBase ,Server is Running at PORT :${PORT}`)
    })
})
.catch(error=>console.log(error))





function errorHandler(err, req, res, next){

    if(res.headersSent){
    return next(err);
    }
    res.status(500).json({error:err})
    }
    