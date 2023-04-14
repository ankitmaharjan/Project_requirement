(()=>{
    const express = require('express');
 const router = express.Router();
 const userController = require('../controller/userController')
 const controller = require('../controller/index')
 const mwHelper =require('../common/index')

 router.post('/create',userController.createUser);
 router.get('/display',userController.displayUser);
 router.delete('/user/:id',userController.deleteUser);
 router.get('/user/:id',userController.searchUser);
 router.put('/user/:id',userController.updateUser);
 router.delete('/user/:id',controller.deleteUser);
 router.post('/signup',controller.userSignup);
 router.post('/login',controller.loginUser);
 
 router.use(mwHelper.isAuthenticate);

 module.exports = router;
})()


