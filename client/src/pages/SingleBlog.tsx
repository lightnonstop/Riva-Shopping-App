import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { blog } from '../images';
export default function SingleBlog() {
  return (
    <>
        <Meta title={`Dynamic blog name`} />
        <BreadCrumb title={`Dynamic blog name`} />
        <div className='blog-wrapper home-wrapper-2 pyc5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='single-blog-card'>
                            <Link to='/blogs' className='d-flex align-items-center gap-10'>
                                <HiOutlineArrowLeft className='fs4' />
                                Go back to Blogs
                            </Link>
                            <h3 className='title'>A Beautiful Sunday Renaissance Morning</h3>
                            <img src={blog} className='img-fluid w-100 my-4' alt="" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aspernatur voluptatibus culpa ullam, fuga placeat repellat. Ducimus dolorum illo consequuntur voluptas aperiam nisi similique sint molestiae, temporibus, veniam enim. Impedit...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}