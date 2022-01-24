const mongoose=require('mongoose')
const validator=require('validator');
const bcrypt=require('bcrypt')
const { Schema }=mongoose
SALT=10

const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email')
            }
            
        }
        
    },
    firstName:{
        type:String,
        trim:true,
        maxLength:100,  
        
    },
    lastName:{
        type:String,
        trim:true,
        maxLength:100,
       
    },
    age:{
        type:Date,
        default:Date.now

    },
    password:{
        type:String,
        required:true,
        trim:true
      

    }
   
    
},{timestamps:true});

//function that runs before saving password to encrypt the password
userSchema.pre('save',async function(next){
    let user=this
    //function runs only when changes are made to password
    if (user.isModified('password')){
        //create salt
        const salt=await bcrypt.genSalt(10);
          //hash pasword with created salt
        const hash=await bcrypt.hash(user.password,salt)
          //update the user.pasword in the db  
        user.password=hash;
    }
    next();       
})
//compare password from input with password stored in db
userSchema.methods.comparePassword=function(inputPassword,cb){
    bcrypt.compare(inputPassword,this.password,(err,isMatch)=>{
        if(err)return cb(err);
        cb(null,isMatch);
    })
}



//convert schema definition to model one can work with
const User=mongoose.model("User",userSchema)
module.exports={ User }