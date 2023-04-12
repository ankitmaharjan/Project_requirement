const db = require('../models');

const users = db.user;
const {Sequelize, DataTypes} = require('sequelize');

//Update UserData
const updateUser = async(req,res,next)=>{
    let id = req.params.id;
    let newData = await users.update({
        username : req.body.username,
        password : req.body.password,
        email : req.body.email,
        phone : req.body.phone,
        address : req.body.address
    }, {where:{id:id}});
    res.send({
        message : `user id:${id} is successfully Update!! and new Data ::`,
        // data : newData
    })
}
module.exports = {updateUser};