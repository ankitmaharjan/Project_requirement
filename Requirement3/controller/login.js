
const db = require('../models');
const users = db.user;

const {Sequelize, DataTypes} = require('sequelize');
const cacheHelp = require('../common/index')

//login validation

const loginUser = async(req,res,next)=>{
        let username = req.body.username;
        let password = req.body.password;

        let data = await users.findOne({where:{username:username,password:password}});
        if(data){
            res.send({
                message:"Successfully Login, Welcome to Login Page"
            })
        }else{
            res.send(`Username and Password is not match, Please Try Again`);
        }
}




module.exports = {loginUser};



/*
(() => {
    //const helper = require("../common/index")
    const check_user = require("./sql/check_user")

    module.exports = async(req, res, next) => {
        const username = req.body.username;
        const password = req.body.password;
     
        // let output = await helper.validationHelper.uservalidation(username,password)
            const output2=await check_user(username,password)
            res.send(output2);
    }
})()
*/
/*
const db = require('../models');

const users = db.user;
const {Sequelize, DataTypes} = require('sequelize');

//login validation
const loginUser = async(req,res,next)=>{
    let username = req.body.username;
    let password = req.body.password;
    let data = await users.findOne({where:{username:username,password:password}});
    if(data==true){
        res.send({
            message: "Successfully login into page"
        })

    }else{
        res.send({
            message: "Username and password is incorrect"
        })
    }
}
module.exports = {loginUser};
*/