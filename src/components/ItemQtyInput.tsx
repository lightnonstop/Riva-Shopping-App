import { useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { getUserCart, updateCartItemQty } from "../features/user/userSlice";
import { cartItemDetailProps } from "../features/user/userService";
interface ItemQtyInputProps {
    cartItem: {
        product: { _id?: string | undefined; }; quantity: number 
};
}
function ItemQtyInput({ cartItem }: ItemQtyInputProps) {
    const dispatch = useAppDispatch();
    const [productDetail, setProductDetail] = useState<cartItemDetailProps>(undefined);
    
    useEffect(() => {
        if (productDetail !== undefined){
            dispatch(updateCartItemQty(productDetail))
            setTimeout(() => {
                dispatch(getUserCart())
            }, 0)
        }
    }, [dispatch, productDetail])
  return (
    <input className='form-control' type="number" value={productDetail?.itemQty} placeholder={`${cartItem?.quantity}`}  min={1} onChange={(e) => setProductDetail({ id: cartItem?.product._id, itemQty: Number(e.target.value)})}
    />
  )
}

export default ItemQtyInput