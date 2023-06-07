import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <>
        <Meta title="Login" />
        <BreadCrumb title="Login" />
        <div className='login-wrapper home-wrapper-2 py-5'>
            <div className='row'>
                <div className='col-12'>
                    <div className="auth-card">
                        <h3>Login</h3>
                        <form action="">
                            <div>
                                <input type="email" name='email' className="form-control" placeholder='email' />
                            </div>

                            <div>
                                <input type="password" name='password' className="form-control" placeholder='password' />
                            </div>
                            <div>
                                <Link to='/forgot-password'>Forgot Password</Link>
                                <div className='d-flex justify-content-center align-items-center gap-15'>
                                    <button className='button border-0'>Login</button>
                                    <Link to='/signup' className='button border-0'>Signup</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}