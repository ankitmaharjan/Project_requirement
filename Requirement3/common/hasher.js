'use strict';
((hashOperator)=>{
    //const crypto = require('crypto');
    const bcrypt = require('bcryptjs');
    //const promise = require('bluebird');

    hashOperator.computeHash = (sourcePassword,salt)=>{
        return bcrypt.hash(sourcePassword,salt)
    };
    hashOperator.createSalt=()=>{
        return bcrypt.genSalt(8);
    };
    hashOperator.comparePassword = async(inputPwd, hash)=>{
        return bcrypt.compare(inputPwd,hash)
    };
})(module.exports)