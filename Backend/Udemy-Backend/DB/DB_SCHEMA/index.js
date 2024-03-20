const mongoose = require('mongoose');


const AdminSchema = new mongoose.Schema({

    username:String,
    password:String,
});

const UserSchema = new mongoose.Schema({

    username:String,
    password:String,
    purchasedCources:[
        {
            type:mongoose.Schema.Types.ObjectId,  
            ref:'Cource'
        }
    ]
});


const CourceSchema = new mongoose.Schema({
    title:String,
    description:String,
    Price:Number,
    imageLink:String,
});


const Admin =  mongoose.model("Admin",AdminSchema);
const User =  mongoose.model("User",UserSchema);
const Cource =  mongoose.model("Cource",CourceSchema);

module.exports={
    Admin,
    User,
    Cource
}