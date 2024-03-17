const express = require("express");
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

(async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://ritik:mit1234@cluster0.wuzhij3.mongodb.net/authTest");
        console.log("db connected successfully");
    } catch (error) {
        console.error(`MongoDB connection Error : ${error}`);
        throw error;
    }
})();

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model("User", userSchema);



app.post('/signup',  async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userCheck = await User.findOne({ email  });

        if (userCheck) {
            return res.status(403).json({
                message: "User already exists"
            });
        }
        else{
            const user = await User.create({
                name,
                email,
                password
            });
    
            res.status(200).json({
                message: "Signed up successfully!",
                data: user
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error in signup" });
    }
});



app.post('/signin',async (req,res)=>{
    const {email , password} = req.body;

    try {

        const user = await  User.findOne({ email });

        if( !user ) {
            return res.status(401).json({message:"User not exist please signup first!"});
        }
        else{
            if(password === user.password){
                let token= jwt.sign({password},jwtPassword);
                
                console.log("token : ",token);
                res.status(200).json({
                    message:'Logged In Successfully',
                    token:token,
                    data:user
                });
            }else{
                res.status(403).json({
                    message:"Enter the correct Password"
                })
            }
        }
        
    } catch (error) {
        res.status(500).json({
            message:"Error in signin"
        })
    }
})

app.listen(3000, () => {
    console.log("server running on port 3000");
});
