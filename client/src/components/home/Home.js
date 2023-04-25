import React from 'react'
import Banner from '../banner/Banner.js'
import Categories from '../categories/Categories.js'
import Posts from './post/PostsHome.js'
import { Link,useSearchParams } from "react-router-dom";


const Home = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  return (
    <div>
      <Banner/>
      <Link
        to={`/create?category=${category || ""}`}
        style={{ textDecoration: "none" }}
      >
        <button className="create_blog">CREATE BLOG</button>
      </Link>
      <div className='posts_section'>
        <Categories/>
        <Posts />
      </div>
    </div>
  )
}

export default Home
