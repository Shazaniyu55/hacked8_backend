const express = require('express')
const router = express.Router();
const {getAllCourse, buyCourse, getExamFrontend, uploadCourse} = require('../controller/usercontroller');


//get routes
router.get('/course', getAllCourse);
router.get('/course/:id', buyCourse);
router.get('/FE-Exam', getExamFrontend);
//post routes
router.post('/uploadCourse', uploadCourse);

module.exports = router