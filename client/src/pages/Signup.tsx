import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';
export default function Signup() {
    return (
        <>
            <Meta title="Signup" />
            <BreadCrumb title="Signup" />
            <Container containerClass='login-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Signup</h3>
                            <form action="" className='d-flex flex-column gap-15'>
                                <div>
                                    <input type="text" name='name' className="form-control" placeholder='Name' />
                                </div>

                                <div>
                                    <input type="email" name='email' className="form-control" placeholder='Email' />
                                </div>

                                <div>
                                    <input type="tel" name='mobile' className="form-control" placeholder='Mobile Number' />
                                </div>

                                <div className='mt-1'>
                                    <input type="password" name='password' className="form-control" placeholder='Password' />
                                </div>
                                <div>
                                    <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                        <button className='button border-0'>Signup</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
