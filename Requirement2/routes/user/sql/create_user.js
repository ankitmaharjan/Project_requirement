(()=>{
    module.exports=async(user_id,username,password,email)=>{
        const helper = require("./../../../common/index")
        const output=await helper.mysqlHelper.query("INSERT INTO user_info (user_id,username,password,email) VALUES ('"+user_id+"','"+username+"','"+password+"','"+email+"')");
        console.log(output[0].affectedRows>0)
        if(output[0].affectedRows>0){
            return true
        }
        else{
            return false
        }
    }
})()