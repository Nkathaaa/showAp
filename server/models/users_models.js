const mongoose=require('mongoose');
const bcrypt=require('bcrypt')



const userSchema=mongoose.Schema({
    email:{
        type:String,
        unique:true,
        require:true,
        

    },
    password:{
        type:String,
        require:true
    }
})

userSchema.pre('save',async function(next){
    let user=this;
    if(user.isModified('password'))
    {
         const salt= await bcrypt.genSalt(10);
         const hash=await bcrypt.hash(user.password,salt)
         user.password=hash

    }
    next()
})

const User=mongoose.model("User",userSchema)
module.exports={ User }

