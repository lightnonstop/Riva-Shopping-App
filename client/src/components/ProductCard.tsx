
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
type ProductCardProps = {
  grid?: number;
}
export default function ProductCard({ grid }: ProductCardProps) {
  let location = useLocation();  
  return (
    <div className={location.pathname === '/store'
      ? `gr-${grid}`
      : 'col-3'
    }>
      <Link to='' className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
          <Link to=''>
            <img src="/images/wish.svg" alt="wishlist" />
          </Link>
        </div>
        <div className='product-image'>
          <img className='img-fluid' src="/images/watch.jpg" alt="product" />
          <img className='img-fluid' src="/images/watch-1.avif" alt="product" />
        </div>
        <div className='product-details'>
          <h6 className='brand'>Havels</h6>
          <h5 className='product-title'>
            Kids headphones coloured for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={3}
            edit={false}
            activeColor='#FFD700'
           />
           <p className={`description ${grid === 12 
           ? 'd-block'
           : 'd-none'
          }`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ducimus doloremque minima suscipit neque, distinctio est, nisi assumenda similique aspernatur odit! Consequuntur, quis. Sit assumenda illo minima, facilis sint magnam...</p>
          <p className="price">$100.00</p>
        </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column gap-15'>
            <Link to=''>
              <img src="/images/prodcompare.svg" alt="compare" />
            </Link>
            <Link to=''>
              <img src="/images/view.svg" alt="view" />
            </Link>
            <Link to=''>
              <img src="/images/add-cart.svg" alt="add-cart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  )
} 
