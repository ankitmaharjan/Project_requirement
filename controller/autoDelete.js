
const db = require('../models');

const users = db.user;
const {Sequelize, DataTypes} = require('sequelize');
const { NULL } = require('mysql2/lib/constants/types');

const autoDelete = async(req,res,next)=>{
    const num = null;
    await users.findAll({where:{phone:num}})
    .then((data)=>{
        if(data ==''){
            res.send({
                message:"There is no record found phone number is empty" 
            })
        } else{
            res.send({
                message:"The detail of user which have no phone number:",
                data : data
            });
            users.destroy({where:{phone:num}});
            // res.send("Successfully Delete");
        }
    });
}

module.exports = {autoDelete};
