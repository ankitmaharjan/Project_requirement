const createUser = require('../controller/createUser');
const loginCont = require('../controller/login');
const searchCont = require('../controller/search');
const deleteCont = require('../controller/deleteUser');
const displayCont = require('../controller/displayUser');
const updateUser = require('../controller/updateUser');
const autoDelete = require('../controller/autoDelete');
//const sendMail = require('../common/sendMail');
//const mw = require('../common/mwHelper');

const adminCont = require('../admin/create_user');
const express = require('express');

const router = express.Router();

const mwHelper = require('../common/mwHelper');
//for user access
router.post('/createuser',createUser.createUser);//sign up page
router.get('/get-user',displayCont.displayUser);
router.delete('/user-delete/:id',deleteCont.deleteUser);
router.get('/user-search/:id',searchCont.searchUser);
router.put('/update-user/:id',updateUser.updateUser);
router.post('/login',loginCont.loginUser);
router.get('/autoDelete',autoDelete.autoDelete);
//router.get('/sendEmail',sendMail);
router.use(mwHelper.isAuthentication);

//for admin access:
router.post('/admin/createuser',adminCont.createUserByAdmin);

module.exports = router;



