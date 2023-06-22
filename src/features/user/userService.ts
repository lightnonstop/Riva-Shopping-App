import axios from 'axios';
import { baseUrl,config } from '../../utils/axiosConfig';

export interface userDataProps {
    firstname?: string
    lastname?: string
    email: string
    mobile?: string
    password: string
}
const register = async(userData: userDataProps) => {
    const response = await axios.post(`${baseUrl}user/register`, userData);
    if (response.data){
        return response.data
    }
}
const login = async(userData: userDataProps) => {
    const response = await axios.post(`${baseUrl}user/login`, userData);
    if (response.data){
        localStorage.setItem('customer', JSON.stringify(response.data))
    }
    return response.data
}
const getWishlist = async() => {
    const response = await axios.get(`${baseUrl}user/wishlist`, config);
    if (response.data){
        return response.data
    }
}

export type cartDataProps = {
    _id?: string;
    title?: string;
    product: string | undefined
    quantity: number
    color: string
    price: number | undefined
}
const addToCart = async(cartData: cartDataProps) => {
    const response = await axios.post(`${baseUrl}user/cart`, cartData, config);
    if (response.data){
        return response.data
    }
}
const getCart = async() => {
    const response = await axios.get(`${baseUrl}user/cart`, config);
    if (response.data){
        return response.data
    }
}
const removeCartItem = async (id: string ) => {
    const response = await axios.delete(`${baseUrl}user/cart/remove-cart-item/${id}`, config);
    if (response.data){
        return response.data
    }
}
export type cartItemDetailProps = {
    id: string | undefined 
    itemQty: string;
} | undefined
const updateQty = async (cartItemDetail:  cartItemDetailProps) => {
    const response = await axios.put(`${baseUrl}user/cart/update-cart-item-qty/${cartItemDetail?.id}`, {
        itemQty: cartItemDetail?.itemQty
    }, config);
    if (response.data){
        return response.data
    }
}
export const authService = {
    register,
    login,
    getWishlist,
    addToCart,
    getCart,
    removeCartItem,
    updateQty,
}