import React from 'react'
import { Link } from 'react-router-dom'
import blog from '../images/blog-1.jpg'

const Blogcard = () => {
  return (
        <div className="blog-card w-100">
            <div className="card-image">
                <img src={blog} className='img-fluid' alt="" />
            </div>
            <div className="blog-content">
               <p className="date">1 Dec,2002</p> 
               <h5 className="title">
                  A beautiful sunday morningn renaisssance
               </h5>
               <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, aliquam!
               </p>
               <Link className="btncss" to="/blog/:id">Read More</Link>
            </div>
    </div>
  )
}

export default Blogcard