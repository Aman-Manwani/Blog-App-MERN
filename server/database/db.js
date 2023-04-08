const mongoose = require('mongoose')

const DBConnection = async(USERNAME,PASSWORD) => {
    const DB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@blogapp.2wz5okj.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(DB_URL);
        console.log('successfully connected to the database');
    }catch(err){
        console.log('error in connecting to database',err);
    }
}

module.exports = DBConnection;