const express = require('express')
const router = express.Router();
const {getAllCourse, examStart, buyCourse, getExamFrontend, uploadCourse, createchat} = require('../controller/usercontroller');


//get routes
router.get('/course', getAllCourse);
router.get('/course/:id', buyCourse);
router.get('/FE-Exam', getExamFrontend);
//post routes
router.post('/uploadCourse', uploadCourse);
router.post('/chat', createchat);
router.post('/exam-start', examStart);



module.exports = router