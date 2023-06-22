
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import FilterCard from '../components/FilterCard';
import BlogCard from '../components/BlogCard';
import Container from "../components/Container";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getAllBlogs } from "../features/blog/blogSlice";
import { useEffect } from "react";
import moment from "moment";
export default function Blog() {
    const dispatch = useAppDispatch();
    const blogs = useAppSelector(state => state.blog.blogs);

    
    useEffect(() => {
        dispatch(getAllBlogs())
    }, [dispatch])
    return (
        <>
            <Meta title="Blogs" />
            <BreadCrumb title="Blogs" />
            <Container containerClass='blog-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-3'>
                        <FilterCard heading='Find By Categories' />
                    </div>
                    <div className='col-9'>
                        <div className='row'>
                            {
                                blogs?.map((blogItem, index) => (
                                    <div className="col-6 mb-3" key={index}>
                                        <BlogCard id={blogItem._id} title={blogItem.title} description={blogItem.description} image={blogItem.images[0].url}
                                       
                                       date={moment(blogItem.createdAt).format("MMMM Do YYYY, h:mm a")}
                                         />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}