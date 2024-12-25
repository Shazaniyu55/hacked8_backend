const express = require('express')
const router = express.Router();
const {getAllCourse, buyCourse, getExamFrontend} = require('../controller/usercontroller');


//get routes
router.get('/course', getAllCourse);
router.get('/course/:id', buyCourse);
router.get('/FE-Exam', getExamFrontend);
//post routes


module.exports = router