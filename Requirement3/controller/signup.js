const db = require('../models');

const users = db.user;
const {Sequelize, DataTypes} = require('sequelize');
const hasher = require('../common/hasher');

//=====creating a Customer=======//

const createUser= async(req,res,next)=>{
    try{
        var chars = "0123456789";
        var string_length = 5;
        var randomstring = '';
        for (var i=0; i<string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum,rnum+1);
        }
        req.body.salt =  await hasher.createSalt();
        const bypassword = await hasher.computeHash(req.body.password,req.body.salt);
        let data = await users.create(
            {
            username : req.body.username,
            password : bypassword,
            email : req.body.email,
            phone : req.body.phone,
            address : req.body.address
        });
        res.send({
            message : " Creating Successfully",
            data : data
        });
    }catch(err){
        console.log('Error in  user Creating',err);
    }
}

module.exports = {createUser};
//phone number navako auto delete garne 
//->using clone job

//Admin Tabel with seprate folder

/*
(()=>{
    const db = require('../models');

    const users = db.user;
    const {Sequelize, DataTypes} = require('sequelize');
    const helper = require("../common/index");
    const create_user = require('./sql/create_user')
    
    module.exports = async(req,res,next)=>{
        const username = req.body.username;
        //const password = req.body.password;
        const email = req.body.email;
        const phone = req.body.phone;
        const address = req.body.address;
        const password = Math.floor(Math.random() * 1000000)+100000;
        console.log(password);
        const salts = await helper.hashHelper.createSalt();
            const bypass = await helper.hashHelper.computeHash(password.toString(),salts);
            console.log(bypass);
  
            
            let output = await helper.validationHelper.uservalidation(username,password,email,phone,address);
            if(output == true){
                const output2=await create_user(username,bypass,email,phone,address);
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
*/
        

/*
(()=>{
    const helper = require("../common/index")
    const create_user = require('./sql/create_user')


    //const createUser = require('./userController')
    module.exports = async(req, res, next) => {
    //const id = req.body.id;
        const username = req.body.username;
        //const password = req.body.password;
        const email = req.body.email;
        const phone = req.body.phone;
        const address = req.body.address;
        const password = Math.floor(Math.random() * 1000000)+100000;
        console.log(password);
        
        const salts = await helper.hashHelper.createSalt();
        const bypass = await helper.hashHelper.computeHash(password.toString(),salts);
        console.log(bypass);
        
        let output = await helper.validationHelper.uservalidation(username,password,email,phone,address)
      
       
        if (output == true) {
            const output2=await create_user(username,bypass,email,phone,address);
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
*/


