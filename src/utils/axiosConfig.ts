export const baseUrl = 'http://localhost:4000/api/';

const getTokenFromLocalStorage = localStorage.getItem('customer') ? JSON.parse(localStorage.getItem('customer') || '') : "";

export const config = {
    headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage.token}`,
        Accept: 'application/json',
    },
}