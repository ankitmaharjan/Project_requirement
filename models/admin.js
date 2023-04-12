'use strict';
module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define('admin', {
    username: {
      type:DataTypes.STRING,
      allowNull : false
    },
    password:{
      type:DataTypes.STRING,
      allowNull : false
    },
    email:{
      type:DataTypes.STRING,
      allowNull : false
    },
    phone: {
      type:DataTypes.INTEGER,
      allowNull : false
    },
    address: {
      type:DataTypes.STRING,
      allowNull : false
    },
    usertypeid: {
      type:DataTypes.INTEGER,
      allowNull : false
    },
    status: {
      type:DataTypes.INTEGER,
      allowNull : false
    },
  }, {
    sequelize,
    tableName : 'admin',
    modelName: 'admin',
  });
  admin.associate = function(models) {
    // associations can be defined here
  };
  return admin;
};

// npx sequelize-cli model:generate --name admin --attributes username:string,password:string,email:string,phone:integer,address:string,
// usertypeid:integer,status:integer,createAt:BigInt,createBy:integer,updateAt:BigInt,updateBy:integer