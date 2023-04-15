import React from "react";
import { categoriees } from "../../constants/data";
import "./Categories.css";
import { Link,useSearchParams } from "react-router-dom";

const Categories = () => {

  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  return (
    <>
      <Link
        to={`/create?category=${category || ""}`}
        style={{ textDecoration: "none" }}
      >
        <button className="create_blog">CREATE BLOG</button>
      </Link>
      <div className="categories_left">
        <Link style={{textDecoration:'none',color:'inherit'}} to="/">
          <p className="all_cate">All Categories</p>
        </Link>
        {categoriees.map((category) => (
          <Link style={{textDecoration:'none',color:'inherit'}} to={`/?category=${category.type}`}>
          <p className="cate" key={category.id}>
            {category.type}
          </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Categories;
