import axios from "axios";
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const md5Hash = process.env.MD5_HASH
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api', // Your API base URL
    timeout: 5000, 
  });
export const getHero = (name: string/*, dispath: (hero: Hero) => void*/ ) =>{
    const getCharacterUrl = `/v1/public/characters?ts=1&apikey=${PUBLIC_KEY}&hash=${md5Hash}&nameStartsWith=${name}`;
    return axiosInstance.get(`${getCharacterUrl}`)
}

export const getResourceUrl = (url: string) => {
    return `${url}?ts=1&apikey=${PUBLIC_KEY}&hash=${md5Hash}`
}