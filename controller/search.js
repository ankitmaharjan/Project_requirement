const db = require('../models');

const users = db.user;
const {Sequelize, DataTypes} = require('sequelize');
//Search UserData:
const searchUser = async(req,res,next)=>{
    let id = req.params.id;
    let data = await users.findOne({where:{id:id}});
    if(data != null){
      res.send({
        message : `Detail of mention ID:${id} are:`,
        data : data
        });
    }else{
        res.send({
            message : `The given ID:${id} is not found in record!!!`
        })
    }
}

module.exports = {searchUser};