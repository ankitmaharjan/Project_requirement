const db = require('../models');
const users = db.user;
const {Sequelize, DataTypes} = require('sequelize');

//DisplayUsers
const displayUser = async(req,res,next)=>{

    let result = await users.findAll({});
        res.send({
            message : "The Customer List are:",
            data : result
    });
}

module.exports = {displayUser};