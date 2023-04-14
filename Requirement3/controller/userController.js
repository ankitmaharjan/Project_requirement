const db = require('../models');

const users = db.user;
const {Sequelize, DataTypes} = require('sequelize');

//=====creating a Customer=======//

//const passwordgenerate = require('../common/passwordgenerate')
const createUser= async(req,res,next)=>{
    
    try{
        let data = await users.create({
            username : req.body.username,
            password : req.body.password,
            //password : passwordgenerate.password,
            email : req.body.email,
            phone : req.body.phone,
            address : req.body.address
        })
        res.send({
            message : " Creating Successfully",
            data : data
        });
    }catch(err){
        console.log('Error in  user Creating');
    }
}

//DisplayUsers
const displayUser = async(req,res,next)=>{

    let result = await users.findAll({});
        res.send({
            message : "The Customer List are:",
            data : result
    });
}

//Delete data:
const deleteUser = async(req,res,next)=>{
    let id = req.params.id;
    let data = await users.destroy({where:{id:id}});
    res.send({
        message : `Successfull Delete data id:${id}`  
    })
}

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
            message : `The given ID:${id} is found in record!!!`
        })
    }
}

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

module.exports = {createUser,displayUser,deleteUser,searchUser,updateUser};