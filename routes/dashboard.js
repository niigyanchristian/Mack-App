const express = require('express');
const _ = require('lodash');
const User = require('../models/user');
const Mock = require('../models/mock');
const Student = require('../models/student');
const jwt = require('jsonwebtoken');
const { getAggregate } = require('../functions/aggregate');
const { calcAggregate } = require('../functions/calcAggregate');
const router = express.Router();
// const aggregateFunc = require('../functions/aggregate');

router.route('/').
get((req, res) =>{

    Mock.find((err,find)=>{
console.log(find);
    Student.find((err,findStudent)=>{
        if(find.length>0){
            console.log('====================================');
            let g = find[find.length-1]._id.toString();
            console.log(g);
            console.log('====================================');
            res.render("dashboard",{mock:find,students:findStudent,newMock:g});
        }else{
            res.render("addmock")
        }
    })
    })
     
}).
delete((req,res)=>{
    console.log("delete");
});


module.exports = router;