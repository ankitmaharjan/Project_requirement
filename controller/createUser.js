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