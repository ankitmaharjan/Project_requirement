(() => {
    const helper = require("./../../../common/index")
    const create_user = require("./../sql/create_user")

    module.exports = async(req, res, next) => {
        
        const user_id = req.body.user_id;
        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email;
        let output = await helper.validationHelper.uservalidation(user_id,username,password,email)
      
       
        if (output == true) {
            const output2=await create_user(user_id,username,password,email)
            if(output2==true){
                res.send('SignUp Succesful')
            }else{
                res.send('SignUp UnSuccesful')
            }
            
        }else{
            res.send('SignUp UnSuccesful')
        }
    
    }
    
})()