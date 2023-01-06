require('dotenv').config();
const express = require("express");
// const bodyParser = require('express').json;
const bodyParser = require("body-parser");
const ejs = require('ejs');
const _ = require('lodash')
const MongoDB =require('./utils/connectMongoDB');
const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register');
const studentRoute = require('./routes/student');
const resultRoute = require('./routes/result');
const mockRoute = require('./routes/mock');
const dashboardRoute = require('./routes/dashboard');
const deletestudentRoute = require('./routes/deletestudent');
const Student=require('./models/student')
const Mock=require('./models/mock')
const Result=require('./models/results')
const aggregateFunc = require('./functions/aggregate');
const { getRemark } = require('./functions/remark');


const app = express();
app.set('view engine', 'ejs');
app.use( express.static( "public" ) );
app.use(bodyParser.urlencoded({extended: true}));
console.log('====================================');
MongoDB();
console.log('====================================');






//END POINTS
app.use('/login',loginRoute);
app.use('/register',registerRoute);
app.use('/result',resultRoute);
app.use('/student',studentRoute);
app.use('/mock',mockRoute);
app.use('/dashboard',dashboardRoute);
app.use('/deletestudent',deletestudentRoute);


app.get("/", function(req, res) {

    res.redirect("dashboard");
     
});

app.listen(process.env.PORT || 3000,()=>{
    console.log("Mock Backend Is Running On Port 3000");
});