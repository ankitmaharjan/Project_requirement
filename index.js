const express = require('express');
const myql = require('mysql2');
const app = express();
const db = require('./models');

const port = 3000;

// app.get('/select',async(req,res)=>{
//     res.send("This is a get Method");
// });

db.sequelize.sync().then((result) => {
    try {
        console.log("Connection Established!!!");
    } catch (error) {
        console.log(error);
    }

});

// app.listen({port},async ()=>{
//     console.log(`Server is running on ${port}`);
//     await db.sequelize.sync({force: true});
// })
// db.sequelize.sync().then((result) => {
//     app.listen(port,()=>{
//         console.log(`The server is running on ${port}`);
//     });
// }).catch((err) => {
//     console.log("Somthing is Error");
// });

// app.listen(port,()=>{
//     console.log(`Server is listen at ${port}`);
// });