import axios from 'axios';
import { baseUrl } from '../../utils/axiosConfig';
export interface contactDataProps{
    name: string
    email: string
    mobile: string
    comment: string
}
const postQuery = async(contactData: contactDataProps) => {
    const response = await axios.post(`${baseUrl}enquiry`, contactData);
    if (response.data){
        return response.data
    }
}

export const contactService = {
    postQuery,
}