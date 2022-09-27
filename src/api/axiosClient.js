import axios from 'axios';
import queryString from 'query-string';


const axiosClient = axios.create({
    baseURL: 'quangnh.xyz/v1/',
});


export default axiosClient;