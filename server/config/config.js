const config={
    production:{
        //key used to create hash that creates token
        SECRET:process.env.SECRET,
        DATABASE:process.env.MONGODB_URI
    },
    default:{
        SECRET:"SUPERSECRETPASSWORD123",
        DATABASE:"mongodb://localhost:27017/showup"
    }
}

exports.get=function get(env){
    return config[env] || config.default
}