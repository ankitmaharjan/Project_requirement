(()=>{
    module.exports=async(username,password)=>{
        let obj="";
        const helper = require("../../common/index")
        const output=await helper.mysqlHelper.query("Select password from users where username='"+username+"'");
        console.log (output[0]);
        let pass=output[0][0].password;
        const val=helper.hashHelper.comparePassword(password,pass);
    //  console.log(val);
        if(val){
            return "login sucessful";
        }
        else{
            return "Not Login";
        }
        
    }
})()