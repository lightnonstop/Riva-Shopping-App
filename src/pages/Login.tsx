import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import { useFormik } from "formik";
import * as yup from 'yup'
import Input from '../components/Input';
import { useAppDispatch } from "../app/hooks";
import { loginUser } from "../features/user/userSlice";

const loginSchema = yup.object({
    email: yup.string().nullable().email('Email address should be valid').required('Email address is required'),
    password: yup.string().required('Password is required'),
})

export default function Login() {
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: values => {
            dispatch(loginUser(values))
        },
    })
    return (
        <>
            <Meta title="Login" />
            <BreadCrumb title="Login" />
            <Container containerClass='login-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Login</h3>
                            <form action="" className='d-flex flex-column gap-15' onSubmit={formik.handleSubmit}>
                            <Input type='email' name='email' placeholder='Email address' value={formik.values.email} onChange={formik.handleChange('email')} onBlur={formik.handleBlur('email')} />
                            <div className="error">
                                    {formik.touched.email && formik.errors.email}
                                </div>

                            <Input type='password' name='password' placeholder='Password' value={formik.values.password} onChange={formik.handleChange('password')} onBlur={formik.handleBlur('password')} />
                                <div className="error">
                                    {formik.touched.password && formik.errors.password}
                                </div>
                                <div>
                                    <Link className='text-decoration-underline' to='/forgot-password'>Forgot Password?</Link>
                                    <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                        <button className='button border-0' type='submit'>Login</button>
                                        <Link to='/signup' className='button border-0 signup'>Signup</Link>
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