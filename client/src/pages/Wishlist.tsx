import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';
export default function Wishlist() {
    return (
        <>
            <Meta title="Wishlist" />
            <BreadCrumb title="Wishlist" />
            <Container containerClass='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                            <img src="/images/cross.svg" className='position-absolute cross img-fluid' alt="cross" />
                            <div className='wishlist-card-image'>
                                <img src="/images/watch.jpg" className='img-fluid w-100' alt="watch" />
                            </div>
                            <div className='p-3'>
                                <h5 className='title'>
                                    Honor T1 7.0 RAM  8 GB ROM 7 Inch with Wi-Fi + 3G Tablet
                                </h5>
                                <h6 className='price my-3'>$ 100</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                            <img src="/images/cross.svg" className='position-absolute cross img-fluid' alt="cross" />
                            <div className='wishlist-card-image'>
                                <img src="/images/watch.jpg" className='img-fluid w-100' alt="watch" />
                            </div>
                            <div className='p-3'>
                                <h5 className='title'>
                                    Honor T1 7.0 RAM  8 GB ROM 7 Inch with Wi-Fi + 3G Tablet
                                </h5>
                                <h6 className='price my-3'>$ 100</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                            <img src="/images/cross.svg" className='position-absolute cross img-fluid' alt="cross" />
                            <div className='wishlist-card-image'>
                                <img src="/images/watch.jpg" className='img-fluid w-100' alt="watch" />
                            </div>
                            <div className='p-3'>
                                <h5 className='title'>
                                    Honor T1 7.0 RAM  8 GB ROM 7 Inch with Wi-Fi + 3G Tablet
                                </h5>
                                <h6 className='price my-3'>$ 100</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}