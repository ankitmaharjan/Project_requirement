const db = require('../models');
const users = db.user;
const ch = require('../common/index');
// const myCache = new NodeCache();

const {Sequelize, DataTypes} = require('sequelize');

//login validation

const loginUser = async(req,res,next)=>{
        let username = req.body.username;
        let password = req.body.password;
        const output = await ch.cacheHelper.saveCache("isLogin",true,100000);
        console.log(output);
        let data = await users.findOne({where:{username:username,password:password}});
        if(output){   
            res.send({
                message:"Successfully Login, Welcome to Login Page"
            });
        }else{
            res.send(`Username and Password is not match, Please Try Again`);
        }
}

module.exports = {loginUser};