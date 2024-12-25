const express = require("express");
const app = express();
const swaggerjsdocs = require('swagger-jsdoc');
const swaggerui = require("swagger-ui-express");
const port = 3400;
const bodyParser = require('body-parser');
const cors = require("cors");
const userRoutes = require('./routes/userroutes')

const options = {
    definition:{
        openapi: '3.0.0',
        info: {
            title:" Hacked8",
            version:"1.0.0"
        },
        servers:[
            {
                url:'http://localhost:3400/'
            }
        ]
    },
    apis: ['./index.js']
}
const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css"

const swaggerSpec = swaggerjsdocs(options);

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({
    origin: "http://localhost:3400",          // Removed the trailing slash
    methods: 'GET, POST, PUT, DELETE',       // Methods allowed
    allowedHeaders: 'Content-Type, Authorization' // Corrected 'authorization' to 'Authorization'
  }));
app.options('*', cors())
app.use("/api/auth", userRoutes);
app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerSpec, {
    customCss:
    '.swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }',
customCssUrl: CSS_URL,
}));



/**
 * @swagger
 * /api/auth/register:
 *  post:
 *      summary: This API is used to register a new user
 *      description: The API collects JSON data from the frontend to register a new user.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          fullname:
 *                              type: string
 *                              example: John Doe
 *                          phoneNumber:
 *                              type: string
 *                              example: 09074235666
 *                          email:
 *                              type: string
 *                              example: shazaniyu@example.com
 *                          country:
 *                              type: string
 *                              example: Nigeria
 *                          password:
 *                              type: string
 *                              example: shazaniyu2@
 *      responses:
 *          200:
 *              description: Success
 *          400:
 *              description: Bad Request
 */




/**
 * @swagger
 * /api/auth/login:
 *  post:
 *      summary: This API is used to log in a user
 *      description: Verifies user credentials.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                              example: john.doe@example.com
 *                          password:
 *                              type: string
 *                              example: Password123
 *      responses:
 *          200:
 *              description: Login successful
 *          401:
 *              description: Unauthorized
 */



/**
 * @swagger
 * /api/auth/exam-start:
 *  post:
 *      summary: This API is used to start  a user exams
 *      description: Verifies user credentials.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          examId:
 *                              type: number
 *                              example: 272726727277
 *                          password:
 *                              type: string
 *                              example: Password123
 *      responses:
 *          200:
 *              description: Login successful
 *          401:
 *              description: Unauthorized
 */



/**
 * @swagger
 * /api/payment/buy-course:
 *  post:
 *      summary: This API is used to make a new payment
 *      description: The API collects JSON data from the frontend to register a new user.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          userId:
 *                              type: string
 *                              example: 67484330b8a5265d16fbad75
 *                          email:
 *                              type: string
 *                              example: shazaniyu@gmail.com
 *                          course:
 *                              type: string
 *                              example: frontend
 *                          amount:
 *                              type: number
 *                              example: 4000
 *      responses:
 *          200:
 *              description: Success
 *          400:
 *              description: Bad Request
 */




/**
 * @swagger
 * /api/auth/adminlogin:
 *  post:
 *      summary: This API is used to log in a admin
 *      description: Verifies user credentials.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                              example: admin@example.com
 *                          password:
 *                              type: string
 *                              example: admin2@
 *      responses:
 *          200:
 *              description: Login successful
 *          401:
 *              description: Unauthorized
 */



/**
 * @swagger
 * /api/auth/FE-Exam:
 *  get:
 *      summary: This API is used to get all the frontEnd exam on the frontend CBT UI
 *      description: The API collects JSON data from the backend it is left for the frontend developer to collect this data and use it on the frontend .
 *      responses:
 *          200:
 *              description: Success
 *          400:
 *              description: Bad Request
 */


app.get('/', (req, res)=>{
    res.send('welcome to Hacked8 Api server')
})


app.listen(port, ()=>{
    console.log(`server running at port http://localhost:${port}`)
});

module.exports = app