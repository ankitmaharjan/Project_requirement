
((validationHelper)=>{
    let pattern = /@gmail.com/;
    validationHelper.uservalidation = async(user_id,username,password,email) =>{
        if (user_id == "" || username == "" || password == "" || email == "") {
            return false;
        }
       
        else if (password.length<= 8) {
            return false;
        }
        else if (pattern.test(email) == false) {
            return false;
        }
        else{
            return true;
        }
    };
})(module.exports);