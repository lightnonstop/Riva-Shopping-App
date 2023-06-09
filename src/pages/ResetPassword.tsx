import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';
import Input from '../components/Input';
export default function ResetPassword() {
    return (
        <>
            <Meta title="Reset Password" />
            <BreadCrumb title="Reset Password" />
            <Container containerClass='login-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Reset Password</h3>
                            <form action="" className='d-flex flex-column gap-15'>
                                <Input type="password" name='password' placeholder='Password' />
                                <Input type="password" name='confirm-password' placeholder='Confirm Password' />
                                <div>
                                    <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                        <button className='button border-0'>Done</button>
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
