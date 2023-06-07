import React, { useState } from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from '../components/ProductCard';
import ReactStars from 'react-rating-stars-component';
import ReactImageZoom from 'react-image-zoom';
export default function SingleProduct() {
    const [orderedProduct, setOrderedProduct] = useState<number>(1);
    const props = {
        width: 400, height: 500, zoomWidth: 500,
        img: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600',
    };
    return (
        <>
            <Meta title={`Product Name`} />
            <BreadCrumb title={`Product Name`} />
            <div className='main-product-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-product-image'>
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className='other-product-images  d-flex flex-wrap gap-15'>
                                <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600" className='img-fluid' alt="" /></div>
                                <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600" className='img-fluid' alt="" /></div>
                                <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600" className='img-fluid' alt="" /></div>
                                <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600" className='img-fluid' alt="" /></div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='main-product-details'>
                                <div className='border-bottom'>
                                    <h3 className="title">
                                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                                    </h3>
                                </div>
                                <div className='border-bottom'>
                                    <p className='price'>$ 100</p>
                                    <div className='d-flex align-items-center gap-10'>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={3}
                                        edit={false}
                                        activeColor='#FFD700'
                                    />
                                    <p className='mb-0'>Based on 2 Reviews</p>
                                    </div>
                                    <a href="#review">Write a Review</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='description-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h4>Description</h4>
                            <div className='bg-white p-3'>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, placeat, nihil excepturi earum sed neque quia nam deleniti necessitatibus voluptate repudiandae. Exercitationem ducimus temporibus atque blanditiis. Nobis sint veniam placeat!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='reviews-wrapper home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 id='review'>Reviews</h3>
                            <div className='review-inner-wrapper'>
                                <div className='review-head d-flex justify-content-between align-items-end'>
                                    <div>
                                        <h4 className='mb-2'>Customer Reviews</h4>
                                        <div className='d-flex gap-10 align-items-center'>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor='#FFD700'
                                            />
                                            <p className='mb-0'>Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {!!orderedProduct && (
                                        <div>
                                            <a className='text-dark text-decoration-underline' href="/">Write a review</a>
                                        </div>
                                    )}
                                </div>
                                <div className='review-form py-4'>
                                    <h4 className='mb-2'>Write a review</h4>
                                    <form action="" className="d-flex flex-column gap-15">
                                        <div>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            edit={true}
                                            activeColor='#FFD700'
                                            />
                                        </div>
                                        <div>
                                            <textarea className="form-control" name="" id="" cols={30} rows={4} placeholder="Comment"></textarea>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button className="button text-capitalize border-0">Submit review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className='reviews mt-4'>
                                    <div className='review'>
                                        <div className='d-flex gap-10 align-items-center'>
                                            <h6 className='mb-0'>Phos Michael</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor='#FFD700'
                                            />
                                        </div>
                                    <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis ut, earum nostrum culpa consequatur consectetur sint debitis, corporis ipsam neque perspiciatis et voluptatem rerum obcaecati accusamus quod, doloremque fugit minus!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="d-flex justify-content-center flex-column">
                        <div>
                            <h3 className="section-heading">Our Popular Products</h3>
                        </div>
                        <div className="row">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}