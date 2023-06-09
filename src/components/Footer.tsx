import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import { newsletter } from "../images";
export default function Footer() {
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for the Newsletter</h2>
              </div>
            </div>

            <div className="col-7">
              <div className="input-group">
                <input 
                type="text"
                className="form-control py-2"
                placeholder="Your Email Address"
                aria-label="Your Email Address"
                aria-describedby="basic-addon2"
                 />
                 <span className="input-group-text p-3 text-uppercase text-white" id="basic-addon2">
                  subscribe
                 </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">220 Nwaniba Street, <br />Uyo, Akwa Ibom State <br />Pincode: 510011</address>
                <a href="tel:+2349134909366" className="mt-4 d-block mb-1 text-white">+2349134909366</a>
                <a href="mailto:umichaeledet003@gmail.com" className="mt-3 d-block mb-0 text-white">umichaeledet003@gmail.com</a>
                <div className="social_links d-flex align-items-center gap-30 mt-2">
                  <a className="text-white" href="/">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="/">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="/">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="/">
                    <BsYoutube className="fs-4"  />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to='/privacy-policy' className="text-white py-2 mb-1" >Privacy Policy</Link>
                <Link to='/refund-policy' className="text-white py-2 mb-1" >Refund Policy</Link>
                <Link to='/shipping-policy' className="text-white py-2 mb-1" >Shipping Policy</Link>
                <Link to='/terms-conditions' className="text-white py-2 mb-1" >Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1" to='/blogs' >Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to=''>About Us</Link>
                <Link className="text-white py-2 mb-1" to=''>FAQ</Link>
                <Link className="text-white py-2 mb-1" to=''>Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to=''>Laptops</Link>
                <Link className="text-white py-2 mb-1" to=''>Headphones</Link>
                <Link className="text-white py-2 mb-1" to=''>Tablets</Link>
                <Link className="text-white py-2 mb-1" to=''>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white mb-0">&copy; {new Date().getFullYear()} created by Unwana Michael</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
