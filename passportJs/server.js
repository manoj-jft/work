const express = require('express');
const path = require('path');
const app = express();


app.use(express.urlencoded({extended : false}));

app.use('/',require(path.join(__dirname,'router/routes.js')))

app.set("view engine","ejs");

app.listen(3000,console.log("server is running on port 3000"))