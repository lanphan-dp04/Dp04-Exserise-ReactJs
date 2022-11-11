import axios from 'axios';

export const dataBanner = () => axios.get('https://6361ddfc7521369cd05fab83.mockapi.io/api/dataBanner');
export const dataPartners = () => axios.get('https://6361ddfc7521369cd05fab83.mockapi.io/api/partners');
export const dataCommonBanner = (id) => axios.get(`https://6361ddfc7521369cd05fab83.mockapi.io/api/commonBanner/${id}`);