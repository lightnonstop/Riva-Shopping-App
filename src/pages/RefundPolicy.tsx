import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';
export default function RefundPolicy() {
    return (
        <>
            <Meta title="Refund Policy" />
            <BreadCrumb title="Refund Policy" />
            <Container containerClass='policy-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='policy'></div>
                    </div>
                </div>
            </Container>
        </>
    )
}
