import { NavLink, Link } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect, useState } from "react";
import { getUserCart } from "../features/user/userSlice";
export default function Header() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.auth.productCart)
  const [itemCount, setItemCount] = useState<number | undefined>(0);
  const [cartTotal, setCartTotal] = useState<number | undefined>(0);
  useEffect(() => {
    setItemCount(cart?.length)
    setCartTotal(cart?.map(cartItem => {
      return cartItem.price * cartItem.quantity;
    }).reduce((curr, next) => {return (curr + next)}))
  }, [cart])
  useEffect(() => {
    dispatch(getUserCart())
  }, [dispatch])
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">Hotline: <a className="text-white" href="tel:+2349134909366">+2349134909366</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white fs" to=''>RIVA.</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input 
                type="text"
                className="form-control py-2"
                placeholder="Search Product Here..."
                aria-label="Search Product Here..."
                aria-describedby="basic-addon2"
                 />
                 <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                 </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to='/compare-product' className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/compare.svg" alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='/wishlist' className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/wishlist.svg" alt="wishlist" />
                      <p className="mb-0">
                      Favourite <br /> Products
                      </p>
                  </Link>
                </div>
                <div>
                  <Link to='/login' className="d-flex align-items-center gap-10 text-white">
                  <img src="/images/user.svg" alt="user" />
                    <p className="mb-0">
                      Log in  <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='/cart' className="d-flex align-items-center gap-10 text-white">
                  <img src="/images/cart.svg" alt="" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">{itemCount}</span>
                      <p>$ {cartTotal}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="/images/menu.svg" alt="menu" />
                      <span className="me-5 d-inline-block">shop categories</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item text-white" to="/">Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="/">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="/">Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/product'>Our Store</NavLink>
                    <NavLink to='/blogs'>Blogs</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
