import * as axios from 'axios';
const instaceAxios = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '2b2c244c-7452-419c-95e4-b29563be5c69',
  },
  withCredentials: true,
});
export const getUsers = (count, currentPage) => instaceAxios.get(`users?count=${count}&page=${currentPage}`).then((res) => res.data);
export const getProfile = (id) => instaceAxios.get(`profile/${id}`);
export const authMe = () => instaceAxios.get(`auth/me`).then((res) => res.data);
export const login = (email, password) => instaceAxios.post('/auth/login', { email, password }).then((res) => res.data);
export const logout = () => instaceAxios.delete('/auth/login').then((res) => res.data);
export const checkFollow = (id) => instaceAxios.get(`follow/${id}`).then((res) => res.data);
export const follow = (id) => instaceAxios.post(`follow/${id}`);
export const unfollow = (id) => instaceAxios.delete(`follow/${id}`);
