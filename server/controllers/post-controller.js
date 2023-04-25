const Post = require('../models/post');


const createPost = async(request,response) => {
    try{
        const post =await new Post(request.body);
        post.save();
        response.status(201).json({msg:'post saved successfully'});
    }
    catch(error){
        console.log(error.message);
    }
}

const getAllPosts = async(req,res) => {
    try{
        const allPosts =await Post.find({});
        res.status(201).json(allPosts)
    }
    catch(error){
        console.log('error in fetching posts',error);
        res.status(500).json({msg:error})
    }
}

module.exports = {createPost,getAllPosts};