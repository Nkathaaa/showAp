const express=require("express")
let router=express.Router()

const { User }=require("../../models/users_models")

router.route("/register")
.post(async(req,res)=>{
   try{
    //createing the mmodel
    const user=new User({
        email:req.body.email,
        password:req.body.password
    })

    const doc = await user.save()
    res.status(200).send(getUserProps(doc))
}catch(error){
    res.status(400).json({mesage:'Error',error:error})
}

})
router.route("/signin")
.post(async(req,res)=>{
    try{

    }catch(error){
        
    }
})



const getUserProps=(props)=>{
    return{
        _id:props._id,
        email:props.email,
        password:props.password
    }
}

module.exports=router