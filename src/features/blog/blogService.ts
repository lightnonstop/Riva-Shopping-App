import axios from 'axios';
import { baseUrl,config } from '../../utils/axiosConfig';
const getBlogs = async() => {
    const response = await axios.get(`${baseUrl}blog`, config);
    if (response.data){
        return response.data
    }
}
const getBlog = async(id: string) => {
    const response = await axios.get(`${baseUrl}blog/${id}`, config);
    if (response.data){
        return response.data
    }
}
export const blogService = {
    getBlogs,
    getBlog,
}