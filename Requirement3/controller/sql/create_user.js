(()=>{
    module.exports=async(username,password,email,phone,address)=>{
        const helper = require("../../common/index")
        const output=await helper.mysqlHelper.query("INSERT INTO users (username,password,email,phone,address) VALUES ('"+username+"','"+password+"','"+email+"','"+phone+"','"+address+"')");
        console.log(output[0].affectedRows>0)
        if(output[0].affectedRows>0){
            return true
        }
        else{
            return false
        }
    }
})()