import axios from 'axios';
// @ts-ignore
import CryptoJs from 'crypto-js';

export const BASE_URL = 'https://chatgpt.hhjkln.com/';

const instance = axios.create({
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    baseURL: BASE_URL,
    withCredentials: false,
});

const aes = (word: string | number) => {
    const key = CryptoJs.enc.Utf8.parse("6eJRiFK*4^!:3gng}nxfr!NJiwGfDTnm)D@3zP^tfy_xxH>Bt7+BaXV.u%]d+76y");
    const srcs = CryptoJs.enc.Utf8.parse(word + '');
    const encrypted = CryptoJs.AES.encrypt(srcs, key, { mode: CryptoJs.mode.ECB, padding: CryptoJs.pad.Pkcs7 });
    return encrypted.toString();
};

const gen = () => {
    const random = Math.floor(Math.random() * 100000000 + 10000000);
    const token = aes(random);
    return { random, token };
}

instance.interceptors.request.use((config) => {
    // @ts-ignore
    config.headers = {
        ...config.headers,
        ...gen(),
    };
    return config;
});

export default instance;
