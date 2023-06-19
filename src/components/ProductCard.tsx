
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
import { prodcompare, wish, watch, watch2, addcart, view } from '../images';
type ProductCardProps = {
  grid?: number;
}
export default function ProductCard({ grid }: ProductCardProps) {
  let location = useLocation();  
  return (
    <div className={location.pathname === '/product'
      ? `gr-${grid}`
      : 'col-3'
    }>
      <Link to={location.pathname === '/'
    ? '/product/:id'
    : location.pathname === '/product/:id'
    ? '/product/:id'
    : ':id'} className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
          <button className='border-0 bg-transparent'>
            <img src={wish} alt="wishlist" />
          </button>
        </div>
        <div className='product-image'>
          <img className='img-fluid' src={watch} alt="product" />
          <img className='img-fluid' src={watch2} alt="product" />
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
            <button className='border-0 bg-transparent'>
              <img src={prodcompare} alt="compare" />
            </button>
            <button className='border-0 bg-transparent'>
              <img src={view} alt="view" />
            </button>
            <button className='border-0 bg-transparent'>
              <img src={addcart} alt="add-cart" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
} 
