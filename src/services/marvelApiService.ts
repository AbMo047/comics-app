import axios from 'axios';
import type { Comic } from '../types/comic';
import { md5 } from 'js-md5';

const publicKey = '11f8e26326d20938105e848327b174a5';
const privateKey = '146567fa64d167262bdaad1ee8dba9fcca4e4381';
const baseURL = 'https://gateway.marvel.com/v1/public/comics';

const getHash = () => {
  const ts = new Date().getTime().toString();
  const hash = md5(ts + privateKey + publicKey);
  return { ts, hash };
};

export const fetchComics = async (): Promise<Comic[]> => {
  try {
    const { ts, hash } = getHash();
    const url = `${baseURL}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    const response = await axios.get(url);
    return response.data.data.results;
  } catch (err: any) {
    console.error('Failed to fetch comics:', err.message);
    throw err;
  }
};
