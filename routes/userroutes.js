const express = require('express')
const router = express.Router();
const {getAllCourse, buyCourse} = require('../controller/usercontroller');


//get routes
router.get('/course', getAllCourse);
router.get('/course/:id', buyCourse);
//post routes


module.exports = router