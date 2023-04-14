const  cachehelper  = require("./cacheHelper")

((mwhelper)=>{
    mwhelper.isAuthenticate = async(req,res,next) =>{
        const isAuthenticated =cachehelper.getCache("login");
        if(!isAuthenticated){
            res.status(401).send(
                {message:"Un authorized request"});
        }
        next() 
    }
})(module.exports)