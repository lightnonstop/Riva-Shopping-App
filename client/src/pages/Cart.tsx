import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { watch } from '../images';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
export default function Cart() {
  return (
    <>
         <Meta title="Cart" />
        <BreadCrumb title="Cart" />
        <section className='cart-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className="row">
                    <div className='col-12'>
                        <div className='cart-header 
                        py-3
                        d-flex justify-content-between align-items-center'>
                            <h4 className='cart-col-1'>Product</h4>
                            <h4 className='cart-col-2'>Price</h4>
                            <h4 className='cart-col-3'>Quantity</h4>
                            <h4 className='cart-col-4'>Total</h4>
                        </div>

                        <div className='cart-data mb-2
                        py-3
                        d-flex justify-content-between align-items-center'>
                            <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                <div className='w-25'>
                                    <img className='img-fluid' src={watch} alt="product" />
                                </div>
                                <div className='w-75'>
                                    <h5>fer3rDe</h5>
                                    <p>Size: feerwwq</p>
                                    <p>Color: KOghjeh</p>
                                </div>
                            </div>
                            <div className='cart-col-2'>
                                <h5 className='price'>$ 100</h5>
                            </div>
                            <div className='cart-col-3 d-flex align-items-center gap-15'>
                                <div>
                                    <input className='form-control' type="number" min={1} max={10} />
                                </div>
                                <div>
                                    <AiFillDelete className='text-danger' />
                                </div>
                            </div>
                            <div className='cart-col-4'>Total</div>
                        </div>
                        <div className='cart-data mb-2
                        py-3
                        d-flex justify-content-between align-items-center'>
                            <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                <div className='w-25'>
                                    <img className='img-fluid' src={watch} alt="product image" />
                                </div>
                                <div className='w-75'>
                                    <h5>fer3rDe</h5>
                                    <p>Size: feerwwq</p>
                                    <p>Color: KOghjeh</p>
                                </div>
                            </div>
                            <div className='cart-col-2'>
                                <h5 className='price'>$ 100</h5>
                            </div>
                            <div className='cart-col-3 d-flex align-items-center gap-15'>
                                <div>
                                    <input className='form-control' type="number" min={1} max={10} />
                                </div>
                                <div>
                                    <AiFillDelete className='text-danger' />
                                </div>
                            </div>
                            <div className='cart-col-4'>Total</div>
                        </div>
                        <div className='col-12 py-2'>
                            <Link to='/product' className='button'>Continue Shopping</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}