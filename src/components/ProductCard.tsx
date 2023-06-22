
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
import { prodcompare, wish, watch, watch2, addcart, view } from '../images';
import { addProductToWishlist, productProps } from '../features/product/productSlice';
import { useAppDispatch } from '../app/hooks';
type ProductCardProps = {
  grid?: number;
  data: productProps[]
}
export default function ProductCard({ grid, data }: ProductCardProps) {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const addToWishList = (id: { prodId: string; }) => {
    dispatch(addProductToWishlist(id))
  }
  return (
    <>
      { data &&
        data?.map((item, index) => (
          <div key={index} className={location.pathname === '/product'
      ? `gr-${grid}`
      : 'col-3'
    }>
      <div
    className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
          <button className='border-0 bg-transparent' onClick={() => addToWishList({ prodId: item._id })}>
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
            {item.title}
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={Number(item.totalRating)}
            edit={false}
            activeColor='#FFD700'
           />
           <p className={`description ${grid === 12 
           ? 'd-block'
           : 'd-none'
          }`} dangerouslySetInnerHTML={{ __html: item?.description }}></p>
          <p className='price'>{`$ ${item.price}`}</p>
        </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column gap-15'>
            <button className='border-0 bg-transparent'>
              <img src={prodcompare} alt="compare" />
            </button>
            <Link to={`/product/${item._id}`} className='border-0 bg-transparent'>
              <img src={view} alt="view" />
            </Link>
            <button className='border-0 bg-transparent'>
              <img src={addcart} alt="add-cart" />
            </button>
          </div>
        </div>
      </div>
          </div>
        ))
      }
      
    </>
  )
} 
