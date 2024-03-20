const mongoose =  require('mongoose');

async function connectDB(){
    try {

        await mongoose.connect(`${process.env.DB_URL}${process.env.DB_Name}`);
        console.log( "MongoDB Connected..." );
        
    } catch (error) {
        console.log("Error connecting to MongoDB",error);
        
    }
};

module.exports = connectDB;