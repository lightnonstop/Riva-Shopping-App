import React from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
export default function Checkout() {
  return (
    <>
        <div className="checkout-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-7">
                        <div className="checkout-left-data">
                            <h3 className='website-name'>Riva</h3>
                            <nav
                            aria-label='breadcrumb'
                            >
                                <ol className='breadcrumb'>
                                    <li className='breadcrumb-item'>
                                        <Link className='text-dark' to="/cart">Cart</Link>
                                    </li>
                                    <li className='breadcrumb-item active' aria-current='page'>Information</li>
                                    <li className='breadcrumb-item'>
                                        Shipping
                                    </li>
                                    <li className='breadcrumb-item active' aria-current='page'>Payment</li>
                                </ol>
                            </nav>
                            <h4 className='title'>Contact Information</h4>
                            <p className='user-details'>
                                Unwana Michael (umichaeledet003@gmail.com)
                            </p>
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
                        <div></div>
                        <div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p>Total</p>
                                <p>$ 10000</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h4>Total</h4>
                            <h5>$ 10000</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
