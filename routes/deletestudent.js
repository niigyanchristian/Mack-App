const express = require('express');
const _ = require('lodash');
const Student = require('../models/student');
const Result = require('../models/results');
const Mock = require('../models/mock');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.route('/').
post((req, res)=> {
    const {studentId, mockId,studentname} = req.body;
    console.log(studentId, mockId);
    Mock.findById(mockId,(err,find)=>{ 
     const data = find.students.filter(check);
         function check(item){
             console.log(item._id.toString() !== studentId);
             return item._id.toString() !== studentId
         }
         console.log('====================================gggg');
         console.log(data);
         console.log('====================================');
         Mock.findByIdAndUpdate(mockId,{students:data},(err,find)=>{
             console.log(err,find);
         })
         Result.findOneAndDelete({name:studentname},(err,find)=>{
             
         })
    })
    Student.findByIdAndDelete(studentId,(err,find)=>{
     if(!err){
         res.redirect("/dashboard");
         
     }
    })
      
 });


module.exports = router;