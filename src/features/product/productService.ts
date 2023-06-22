import axios from 'axios';
import { baseUrl, config } from '../../utils/axiosConfig';
const getProducts = async() => {
    const response = await axios.get(`${baseUrl}product`);
    if (response.data){
        return response.data
    }
}
const getProduct = async(id: string) => {
    const response = await axios.get(`${baseUrl}product/${id}`);
    if (response.data){
        return response.data
    }
}
const addToWishList = async(productId: { prodId: string }) => {
    const response = await axios.put(`${baseUrl}product/wishlist`, productId, config);
    if (response.data){
        return response.data
    }
}
export const productService = {
    getProducts,
    addToWishList,
    getProduct,
}