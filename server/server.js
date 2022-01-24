const express=require('express');
const mongoose=require("mongoose");
const config=require("./config/config").get(process.env.NODE_ENV);
const cookieparser= require('cookie-parser')
const bodyparser= require('body-parser')
const app=express();
const users=require("./routes/api/users")

//mongoose setup
const {auth}=require("../server/middleware/auth")
const {User}=require("./models/users_models")
require('dotenv').config()
//connect to mongodb
const mongoUri=`mongodb+srv://admin:Nkatha123@cluster0.qibpo.mongodb.net/showupretryWrites=true&w=majority`
mongoose.connect(mongoUri,{
  
})
app.use("/api/users",users)

/** 
//auth middleware that checks whether user is logged in.
app.get("/api/auth",auth,(req,res)=>{
    res.json({
        isAuth:true,
        id:req.user._id,
        email:req.user.email,
        lastname:req.user.lastname
    })
})



app.post("/api/register",(req,res)=>{
    //user instance with the body of the request(req)
const user=new User(req.body)
  //save the doc
user.save((err,person)=>{
    if(err)return res.status(400).send(err)
    res.status(200).json({
        post:true,
        person
    })
})
    
})
*/


const port=process.env.PORT || 3002;
app.listen(port,()=>{
    console.log(`SERVER RUNNING`)
})