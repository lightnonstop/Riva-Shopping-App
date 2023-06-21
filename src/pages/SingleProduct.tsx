import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from '../components/ProductCard';
import ReactStars from 'react-rating-stars-component';
import ReactImageMagnify from 'react-image-magnify';
import Color from '../components/Color';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import Container from '../components/Container';
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getAProduct } from "../features/product/productSlice";
import { toast } from "react-toastify";
import { addProductToCart, getUserCart } from "../features/user/userSlice";
export default function SingleProduct() {

    const location = useLocation();
    const productId = location.pathname.split('/')[2]
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const product = useAppSelector(state => state.product.product)
    const [orderedProduct, setOrderedProduct] = useState<number>(1);

    const [color,setColor] = useState<null | string>(null);
    const [quantity,setQuantity] = useState<number>(0);
    const [addedToCart,setAddedToCart] = useState<boolean>(false);

    const cart = useAppSelector(state => state.auth.productCart)
    
    const productImageSource = product?.images[0].url;
    const alt = 'Wristwatch';
    useEffect(() => {
        dispatch(getAProduct(productId))
        dispatch(getUserCart())
    }, [dispatch, productId])

    useEffect(() => {
        if (cart){
            for (let  i = 0; i < cart?.length; i++){
                if (productId === cart[i].product?._id){
                    setAddedToCart(true);
                }
            }
        }
    }, [cart, productId])

    function uploadToCart(){
        if (color == null){
            toast.error('Please choose a color')
        } else {
            dispatch(addProductToCart({
                product: product?._id,
                quantity,
                color,
                price: product?.price,
            }))
        }
    }
    const props = {
        smallImage: {
            alt: alt,
            isFluidWidth: true,
            src: productImageSource,
        },
        largeImage: {
            src: productImageSource,
            width: 1129,
            height: 800,
        },
        enlargedImageContainerClassName: 'product-magnified-image-cont',
        enlargedImageClassName: 'product-magnified-image',
        enlargedImagePosition: 'over',
        hintTextMouse: 'Hover to zoom',
        isHintEnabled: true,
        shouldHideHintAfterFirstActivation: false,
        fadeDurationInMs: 200,
        hoverDelayInMs: 100,
    };

    const copyToClipboard = (text: string) => {
        const textField = document.createElement('textarea');
        textField.innerHTML = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
    };

    return (
        <>
            <Meta title={`Product Name`} />
            <BreadCrumb title={`Product Name`} />
            <Container containerClass='main-product-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-product-image'>
                            <div className='image-magnify'>
                                <ReactImageMagnify
                                    {...props}
                                />
                            </div>
                        </div>
                        <div className='other-product-images  d-flex flex-wrap gap-15'>
                            <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600" className='img-fluid' alt="" /></div>
                            <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600" className='img-fluid' alt="" /></div>
                            <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600" className='img-fluid' alt="" /></div>
                            <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600" className='img-fluid' alt="" /></div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='main-product-details'>
                            <div className='border-bottom'>
                                <h3 className="title">
                                    {product?.title}
                                </h3>
                            </div>
                            <div className='border-bottom py-3'>
                                <p className='price'>{`$ ${product?.price}`}</p>
                                <div className='d-flex align-items-center gap-10'>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={Number(product?.totalRating) ? Number(product?.totalRating) : console.log(product?.totalRating)
                                        }
                                        edit={false}
                                        activeColor='#FFD700'
                                    />
                                    <p className='mb-0 t-review'>( 2 Reviews )</p>
                                </div>
                                <a className='review-btn' href="#review">Write a Review</a>
                            </div>
                            <div className='border-bottom py-3'>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Type :</h3> <p className='product-data'>Watch</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Brand :</h3> <p className='product-data'>{`${product?.brand}`}</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Category :</h3> <p className='product-data'>{`${product?.category}`}</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Tag :</h3> <p className='product-data'>{`${product?.tag}`}</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Availability :</h3> <p className='product-data'>In Stock</p>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Size :</h3>
                                    <div className='d-flex flex-wrap gap-15'>
                                        <span className='badge border border-1 bg-white text-dark border-secondary text-uppercase'>s</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary text-uppercase'>m</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary text-uppercase'>xl</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary text-uppercase'>xxl</span>
                                    </div>
                                    <div className='d-flex gap-10 flex-column mt-2 mb-32'>
                                        <h3 className='product-heading'>Color :</h3>
                                        <Color setColor={setColor} data={product?.color} />
                                    </div>
                                    <div className='d-flex gap-10 align-items-center flex-row mt-2 mb-3'>
                                        <h3 className='product-heading'>Quantity :</h3>
                                        <div className=''>
                                            <input type="number" name="" id="" min={1} max={10} className='form-control' style={{ width: '70px' }} value={quantity} onChange= {(e) => setQuantity(Number(e.target.value))} />
                                        </div>
                                        <div className='d-flex align-items-center gap-30 ms-5'>
                                            <button className='button border-0 text-capitalize' type='submit' onClick={() => addedToCart 
                                                ? navigate('/cart') 
                                                : uploadToCart()}>
                                                {addedToCart 
                                                ? "Go to cart" 
                                                : "Add to Cart"}
                                            </button>
                                            <button className='button signup text-capitalize'>
                                                Buy It Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <div>
                                        <a href="/"><TbGitCompare className='fs-5 me-2' /> Add to Compare</a>
                                    </div>
                                    <div>
                                        <a href="/"><AiOutlineHeart className='fs-5 me-2' /> Add to WishList</a>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column my-3'>
                                    <h3 className='product-heading'>Shipping & Returns:</h3>
                                    <p className='product-data'>
                                        Free shipping and returns available on all orders! <br />
                                        We ship all US domestic orders within <b>5 - 10 business days!</b>
                                    </p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-3'>
                                    <h3 className='product-heading'>Product Link: </h3>
                                    <a href="javascript:void(0);" onClick={() => { copyToClipboard(window.location.href) }}>Copy Product Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container containerClass='description-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h4>Description</h4>
                        <div className='bg-white p-3'>
                            <p dangerouslySetInnerHTML={{ __html: product?.description.substring(0,) + '' }}></p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container containerClass='reviews-wrapper home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 id='review'>Reviews</h3>
                        <div className='review-inner-wrapper'>
                            <div className='review-head d-flex justify-content-between align-items-end'>
                                <div>
                                    <h4 className='mb-2'>Customer Reviews</h4>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor='#FFD700'
                                        />
                                        <p className='mb-0'>Based on 2 Reviews</p>
                                    </div>
                                </div>
                                {!!orderedProduct && (
                                    <div>
                                        <a className='text-dark text-decoration-underline' href="/">Write a review</a>
                                    </div>
                                )}
                            </div>
                            <div className='review-form py-4'>
                                <h4 className='mb-2'>Write a Review</h4>
                                <form action="" className="d-flex flex-column gap-15">
                                    <div>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            edit={true}
                                            activeColor='#FFD700'
                                        />
                                    </div>
                                    <div>
                                        <textarea className="form-control" name="" id="" cols={30} rows={4} placeholder="Comment"></textarea>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button className="button text-capitalize border-0">Submit review</button>
                                    </div>
                                </form>
                            </div>
                            <div className='reviews mt-4'>
                                <div className='review'>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h6 className='mb-0'>Phos Michael</h6>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            edit={false}
                                            activeColor='#FFD700'
                                        />
                                    </div>
                                    <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis ut, earum nostrum culpa consequatur consectetur sint debitis, corporis ipsam neque perspiciatis et voluptatem rerum obcaecati accusamus quod, doloremque fugit minus!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container containerClass="popular-wrapper py-5 home-wrapper-2">
                <div className="d-flex justify-content-center flex-column">
                    <div>
                        <h3 className="section-heading">Our Popular Products</h3>
                    </div>
                    <div className="row">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </Container>
        </>
    )
}