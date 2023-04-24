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

module.exports = createPost;