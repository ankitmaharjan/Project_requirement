const db = require('../models');

const users = db.user;
const {Sequelize, DataTypes} = require('sequelize');

//Delete data:
const deleteUser = async(req,res,next)=>{
    let id = req.params.id;
    let data = await users.destroy({where:{id:id}});
    res.send({
        message : `Successfull Delete data id:${id}`  
    })
}

module.exports = {deleteUser};