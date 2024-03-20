const bodyParser = require('body-parser');
const dotenv = require('dotenv' );
const express = require('express');
const connectDB = require('./DB/index');




dotenv.config();
const app = express();




app.use(bodyParser.json());



const PORT = process.env.PORT || 3001;


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    })
});