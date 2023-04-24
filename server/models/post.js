const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        reuired:true,
    },
    picture:{
        type:String,
        reuired:true,
    },
    username:{
        type:String,
        reuired:true,
    },
    categories:{
        type:String,
        reuired:true,
    },
    createdDate:{
        type:Date
    }
})

const post = mongoose.model('post',postSchema)

module.exports = post;