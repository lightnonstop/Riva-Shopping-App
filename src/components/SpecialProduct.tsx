
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
interface SpecialProductProps{
    title: string
    brand: string
    totalRating: number
    price: string
    sold: number
    quantity: number
    id: string
}
export default function SpecialProduct({ title, brand, totalRating, price, sold, quantity, id, }: SpecialProductProps) {
  return (
    <div className='col-4'>
        <div className='special-product-card'>
            <div className='d-flex justify-content-between'>
                <div>
                    <img src="/images/watch.jpg" className='img-fluid' alt="watch" />
                </div>
                <div className='special-product-content'>
                    <h5 className='brand'>{brand}</h5>
                    <h6 className='title'>
                        {title}
                    </h6>
                    <ReactStars
                        count={5}
                        size={24}
                        value={totalRating}
                        edit={false}
                        activeColor='#FFD700'
                    />
                    <p className='price'>
                        <span className='red-p'>{`$ ${price}`}</span> &nbsp; <s>$200</s>
                    </p>
                    <div className='discount-till d-flex align-items-center gap-10'>
                        <p className='mb-0'>
                            <b>4 </b>days
                        </p>
                        <div className='d-flex gap-10 align-items-center'>
                            <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                            <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                            <span className='badge rounded-circle p-3 bg-danger'>1</span>
                        </div>
                    </div>
                    <div className='prod-count my-3'>
                            <p>Products: {quantity}</p>
                            <div className='progress'>
                                <div 
                                className='progress-bar'
                                role='progressbar'
                                style={{ width: `${(quantity / (sold + quantity) * 100)}%` }}
                                aria-valuenow={quantity / (sold + quantity) * 100}
                                aria-valuemin={quantity}
                                aria-valuemax={sold + quantity}
                                />
                            </div>
                    </div>
                    <Link to={`/product/${id}`} className='button'>View</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
