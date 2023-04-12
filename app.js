const express = require('express');
const routes = require('./routes/routes');
//const cors = require("cors");
const bodyParser = require('body-parser');
//const mysqlHelper = require("./common/mysqlHelper")
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}));
//app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(port,()=>{
    //mysqlHelper.init();
    console.log(`Server is listen at ${port}`);
});