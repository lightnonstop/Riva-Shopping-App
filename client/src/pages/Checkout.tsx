import React from 'react'

export default function Checkout() {
  return (
    <>
        <div className="checkout-wrapper">
            <div className="container-xxl">
                <div className="col-7">
                    <div className="checkout-left-data">
                        <h3 className='website-name'>Riva</h3>
                        <nav
                        aria-label='breadcrumb'
                        >
                            <ol className='breadcrumb'>
                                <li className='breadcrumb-item'>
                                    <a href="#">Home</a>
                                </li>
                                <li className='breadcrumb-item active' aria-current='page'>Library</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="col-5"></div>
            </div>
        </div>
    </>
  )
}
