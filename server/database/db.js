const mongoose = require('mongoose')

const DBConnection = async() => {
    const DB_URL = '';
    try{
        const connection = await mongoose.connect(DB_URL)
        console.log('successfully connected to the database');
    }catch(err){
        console.log('error in connecting to database',err);
    }
}

mongoose.connect()