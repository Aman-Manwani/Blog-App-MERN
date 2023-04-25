import React, { useEffect,useState } from 'react'
import './PostsHome.css'
// import {API} from '../../../service/api';
import { getAccessToken } from "../../../utils/common-utils";
import axios from 'axios';

const Posts = () => {

  const [posts,setPosts] = useState([]);

  
  useEffect(()=> {
    const headers = {
      authorization:getAccessToken()
    }
    const fetchData = async() => {
      let response = await axios.get('http://localhost:8000/posts',{headers});
      setPosts(response.data);
    }
    fetchData();
  },[]);
  
  return (
    <>
      {
        posts && posts.length > 0 ? posts.map(post=>{
          return(
            <div key={post._id}>hii</div>
          )
        }):<div>No Data Available to Display</div>
      }
    </>
  )
}

export default Posts
