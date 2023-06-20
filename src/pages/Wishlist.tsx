import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getUserWishlist } from "../features/user/userSlice";
import { useEffect } from "react";
import { addProductToWishlist } from "../features/product/productSlice";
export default function Wishlist() {
    const dispatch = useAppDispatch();
    const wishlist = useAppSelector(state => state.auth.wishlist?.wishlist);

    useEffect(() => {
        dispatch(getUserWishlist())
    }, [])
    const removeFromWishlist = (id: { prodId: string; }) => {
        dispatch(addProductToWishlist(id))
        setTimeout(() => {
            dispatch(getUserWishlist())
        },0)
      }
    return (
        <>
            <Meta title="Wishlist" />
            <BreadCrumb title="Wishlist" />
            <Container containerClass='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='row text-center fs-3'>
                    {wishlist?.length === 0 && (
                        <div>
                            No data
                        </div>
                    )}
                    {
                        wishlist?.map((product, index: string) => (
                            <div key={index} className='col-3'>
                                <div className='wishlist-card position-relative'>
                                    <img onClick={() => removeFromWishlist({ prodId: product._id })} src="/images/cross.svg" className='position-absolute cross img-fluid' alt="cross" />
                                    <div className='wishlist-card-image'>
                                        <img src={product.images[0] ? product.images[0] :  "/images/watch.jpg"} className='img-fluid w-100' alt="watch" />
                                    </div>
                                    <div className='p-3'>
                                        <h5 className='title'>
                                            {product.title}
                                        </h5>
                                        <h6 className='price my-3'>{`$ ${product.price}`}</h6>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </>
    )
}