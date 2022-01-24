const express=require('express');

let router=express.Router()
require('dotenv').config();

const{ User }=require("../../models/users_models")

router.route("/register")
.post( async (req,res)=>{
   try{
   const user=new User({
     email:req.body.email,
     password:req.body.password})
   const  doc= await user.save()

   res.cookie('acept-cooke','hhgg')
   .status(200).send(doc)

 

   }catch(error){
     res.status(400).json({  message:"error"})

   }
})



module.exports=router
