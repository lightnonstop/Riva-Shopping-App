
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import FilterCard from '../components/FilterCard';
import BlogCard from '../components/BlogCard';
export default function Blog() {
  return (
    <>
        <Meta title="Blogs" />
        <BreadCrumb title="Blogs" />
        <div className='blog-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        <FilterCard heading='Find By Categories' />
                    </div>
                    <div className='col-9'>
                        <div className='row'>
                            <div className="col-6 mb-3">
                                <BlogCard />
                            </div>
                            <div className="col-6 mb-3">
                                <BlogCard />
                            </div>

                            <div className="col-6">
                                <BlogCard />
                            </div>
                            <div className="col-6">
                                <BlogCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}