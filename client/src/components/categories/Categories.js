import React from 'react'
import { categoriees } from '../../constants/data'
import './Categories.css'

const Categories = () => {
  return (
    <>

        <button className='create_blog'>CREATE BLOG</button>
        <div className='categories_left'>
            <p className='all_cate'>All Categories</p>
            {
                categoriees.map( category => (
                    <p className='cate' key={category.id}>{category.type}</p>
                ))
            }
        </div>
    </>
  )
}

export default Categories
