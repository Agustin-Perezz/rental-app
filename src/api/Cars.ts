import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URl;

export const rentalApi = axios.create({
    baseURL: BASE_URL,
});
