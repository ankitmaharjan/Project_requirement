const db = require('../models');

const admin = db.admin;
const {Sequelize, DataTypes} = require('sequelize');

//=====creating a Customer=======//

const createUserByAdmin= async(req,res,next)=>{
    try{
        var chars = "0123456789";
        var string_length = 5;
        var randomstring = '';
        for (var i=0; i<string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum,rnum+1);
        }
        let data = await admin.create({
            username : req.body.username,
            password : randomstring,
            email : req.body.email,
            phone : req.body.phone,
            address : req.body.address,
            usertypeid : req.body.usertypeid,
            status : req.body.status
        })
        res.send({
            message : " Creating Successfully",
            data : data
        });
    }catch(err){
        console.log('Error in  user Creating');
    }
}

module.exports = {createUserByAdmin};