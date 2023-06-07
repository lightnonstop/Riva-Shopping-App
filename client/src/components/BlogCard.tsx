import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard() {
  return (
    <div className='blog-card'>
      <div className='card-image'>
        <img src="/images/blog-1.jpg" className='img-fluid w-100' alt="blog" />
      </div>
      <div className='blog-content'>
        <p className='date'>29 May, 2023</p>
        <h5 className='title'>A beautiful sunday morning renaissance</h5>
        <p className='desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, mollitia! Exercitationem
        </p>
        <Link to='' className="button">Read More</Link>
      </div>
    </div>
  )
}
