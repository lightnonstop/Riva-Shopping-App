import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Container from '../components/Container';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getABlog } from "../features/blog/blogSlice";
import { useEffect } from "react";
export default function SingleBlog() {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const blog = useAppSelector(state => state.blog.blog);
    const blogId = location.pathname.split('/')[2]
    
    useEffect(() => {
        dispatch(getABlog(blogId))
    }, [blogId, dispatch])
    return (
        <>
            <Meta title={`${blog?.title}`} />
            <BreadCrumb title={`${blog?.title}`} />
            <Container containerClass='blog-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='single-blog-card'>
                            <Link to='/blogs' className='d-flex align-items-center gap-10'>
                                <HiOutlineArrowLeft className='fs4' />
                                Go back to Blogs
                            </Link>
                            <h3 className='title'>{blog?.title}</h3>
                            <img src={blog?.images[0]?.url} className='img-fluid w-100 my-4' alt="" />
                            <p dangerouslySetInnerHTML={{ __html: blog?.description.substring(0,) + '' }}></p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}