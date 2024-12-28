const express = require('express')
const router = express.Router();
const {getAllCourse, examStart, buyCourse, getExamFrontend, uploadCourse, createchat} = require('../controller/usercontroller');
const requestIp = require("request-ip")

// Array to store IP addresses
let userIpList = [];

//get routes
router.get('/course', getAllCourse);
router.get('/course/:id', buyCourse);
router.get('/FE-Exam', getExamFrontend);

//exams login logic based on IP difference..
router.get('/exam-login', (req, res)=>{
         // Get the IP of the client
    const ip = requestIp.getClientIp(req);

    // Check if the IP already exists in the list
    if (!userIpList.includes(ip)) {
        userIpList.push(ip);
        console.log('New IP added:', ip);
    } else {
        console.log('IP already exists:', ip);
    }

    // Respond with a message or additional data
    res.json({ message: 'IP recorded', ip, userIpList });
});


//post routes
router.post('/uploadCourse', uploadCourse);
router.post('/chat', createchat);
router.post('/exam-start', examStart);



module.exports = router