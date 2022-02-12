// token: 91dbd77b3ca5f59b0d1de9ffd813f68760ae0ea5
// https://api-ssl.bitly.com/v4/shorten
import axios from "axios";

export const token = '91dbd77b3ca5f59b0d1de9ffd813f68760ae0ea5';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Authorization' : `Bearer ${token}`
    }
})

export default api;