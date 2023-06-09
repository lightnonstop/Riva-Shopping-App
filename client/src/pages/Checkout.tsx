import React from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { watch } from '../images'
import Container from '../components/Container'
export default function Checkout() {
    return (
        <>
            <Container containerClass="checkout-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-7">
                        <div className="checkout-left-data">
                            <h3 className='website-name'>Riva</h3>
                            <nav
                                aria-label='breadcrumb'
                            >
                                <ol className='breadcrumb'>
                                    <li className='breadcrumb-item'>
                                        <Link className='text-dark total-price' to="/cart">Cart</Link>
                                    </li>
                                    <li className='breadcrumb-item total-price active' aria-current='page'>Information</li>
                                    <li className='breadcrumb-item total-price'>
                                        Shipping
                                    </li>
                                    <li className='breadcrumb-item active' aria-current='page'>Payment</li>
                                </ol>
                            </nav>
                            <h4 className='title total'>Contact Information</h4>
                            <p className='user-details total'>
                                Unwana Michael (umichaeledet003@gmail.com)
                            </p>
                            <h4 className='mb-3'>Shipping Address</h4>
                            <form action="" className='d-flex flex-wrap gap-15 justify-content-between'>
                                <div className='w-100'>
                                    <select name="" id="" className='form-control form-select'>
                                        <option value="">
                                            Select Country
                                        </option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" className='form-control' placeholder='First Name' />
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" className='form-control' placeholder='Last Name' />
                                </div>
                                <div className='w-100'>
                                    <input type="text" className='form-control' placeholder='Address' />
                                </div>
                                <div className='w-100'>
                                    <input type="text" className='form-control' placeholder='Apartment, Suite, etc' />
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" className='form-control' placeholder='City' />
                                </div>
                                <div className='flex-grow-1'>
                                    <select name="" id="" className='form-control form-select'>
                                        <option value="" selected disabled>Select State</option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" className='form-control' placeholder='Zipcode' />
                                </div>
                                <div className='w-100'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Link to='/cart' className='text-dark'>
                                            <BiArrowBack className='me-2' />
                                            Return To Cart</Link>
                                        <Link to='/cart' className='button'>Continue to Shipping</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className='border-bottom py-4'>
                            <div className='d-flex gap-10 align-items-center'>
                                <div className='w-75 d-flex mb-2 gap-10'>
                                    <div className='w-25 position-relative'>
                                        <span style={{ top: '-10px', right: '-5px' }} className='badge bg-secondary text-white rounded-circle w-25 h-25 position-absolute d-flex align-items-center justify-content-center'>1</span>
                                        <img className='img-fluid' src={watch} alt="watch" />
                                    </div>
                                    <div>
                                        <h5 className='total-price'>grfgrr</h5>
                                        <p className='total-price'>s / #fggg</p>
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <h5 className='total'>$ 100</h5>
                                </div>
                            </div>
                        </div>
                        <div className='border-bottom py-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='mb-0 total'>SubTotal</p>
                                <p className='mb-0 total-price'>$ 10000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='total'>Shipping</p>
                                <p className='total-price'>$ 10000</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                            <h4 className='total'>Total</h4>
                            <h5 className='total-price'>$ 10000</h5>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
