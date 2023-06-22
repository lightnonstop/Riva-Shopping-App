import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';
import Input from '../components/Input';
import { useFormik } from "formik";
import * as yup from 'yup'
import { registerUser } from "../features/user/userSlice";
import { useAppDispatch } from "../app/hooks";
const signupSchema = yup.object({
    firstname: yup.string().required('First name is required'),
    lastname: yup.string().required('Last name is required'),
    email: yup.string().nullable().email('Email address should be valid').required('Email address is required'),
    mobile: yup.string().required('Mobile number is required'),
    password: yup.string().required('Password is required'),
})

export default function Signup() {
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            password: '',
        },
        validationSchema: signupSchema,
        onSubmit: values => {
            dispatch(registerUser(values))
        },
    })
    return (
        <>
            <Meta title="Signup" />
            <BreadCrumb title="Signup" />
            <Container containerClass='login-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Signup</h3>
                            <form action="" className='d-flex flex-column gap-15' onSubmit={formik.handleSubmit}>
                                <Input type='text' name='firstname' placeholder='First name' value={formik.values.firstname} onChange={formik.handleChange('firstname')} onBlur={formik.handleBlur('firstname')} />
                                <div className="error">
                                    {formik.touched.firstname && formik.errors.firstname}
                                </div>

                                <Input type='text' name='lastname' placeholder='Last name' value={formik.values.lastname} onChange={formik.handleChange('lastname')} onBlur={formik.handleBlur('lastname')} />
                                <div className="error">
                                    {formik.touched.lastname && formik.errors.lastname}
                                </div>

                                <Input type='email' name='email' placeholder='Email address' value={formik.values.email} onChange={formik.handleChange('email')} onBlur={formik.handleBlur('email')} />
                                <div className="error">
                                    {formik.touched.email && formik.errors.email}
                                </div>

                                <Input type='tel' name='mobile' placeholder='Mobile number' value={formik.values.mobile} onChange={formik.handleChange('mobile')} onBlur={formik.handleBlur('mobile')} />
                                <div className="error">
                                    {formik.touched.mobile && formik.errors.mobile}
                                </div>

                                <Input type='password' name='password' placeholder='Password' value={formik.values.password} onChange={formik.handleChange('password')} onBlur={formik.handleBlur('password')} />
                                <div className="error">
                                    {formik.touched.password && formik.errors.password}
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
