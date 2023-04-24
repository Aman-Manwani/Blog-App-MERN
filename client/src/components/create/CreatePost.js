import React from "react";
import header_img from "./creative.jpg";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./CreatePost.css";
import { useState, useEffect, useContext } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { API } from "../../service/api";

const initialPost = {
  title: "",
  description: "",
  picture: "",
  username: "",
  categories: "",
  createdDate: new Date(),
};

const CreatePost = () => {
  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState("");

  const imgDirected = post.picture ? post.picture : header_img;

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  
  const location = useLocation();
  const navigate = useNavigate();
  
const savePost = async() => {
  let response = await API.createPost(post)
  if(response.isSuccess){
    navigate('/');
  }
}

  const { account } = useContext(DataContext);

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const damta = new FormData();
        damta.append("name", file.name);
        damta.append("file", file);
        const res = await API.uploadFile(damta);
        post.picture = res.data;
      }
    };
    getImage();
    post.categories = location.search?.split("=")[1] || "All";
    post.username = account.username;
  }, [file]);

  return (
    <div className="create_blog_pg">
      <img src={imgDirected} alt="Create_Blog" className="create_banner" />
      <div className="blog_fields">
        <label htmlFor="fileInput">
          <AddCircleIcon fontSize="large" color="action" />
        </label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          id="fileInput"
          className="img_upload_create"
        />
        <input
          type="text"
          onChange={handleChange}
          name="title"
          className="title_blog"
          placeholder="Title"
        />
        <button className="publish_btn" onClick={savePost}>Publish</button>
      </div>
      <div className="blog_content">
        <textarea
          className="about_blog"
          onChange={handleChange}
          name="description"
          placeholder="Enter Your Blog Content"
        />
      </div>
    </div>
  );
};

export default CreatePost;
