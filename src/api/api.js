import * as axios from 'axios';
const instanceAxios = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '2b2c244c-7452-419c-95e4-b29563be5c69',
  },
  withCredentials: true,
});
export const authAPI = {
  authMe: () => instanceAxios.get(`auth/me`).then((response) => response.data),
  login: (data) => instanceAxios.post('/auth/login', data).then((response) => response.data),
  logout: () => instanceAxios.delete('/auth/login').then((response) => response.data),
};

export const usersAPI = {
  getUsers: (count, currentPage) => instanceAxios.get(`users?count=${count}&page=${currentPage}`).then((response) => response.data),
  checkFollow: (id) => instanceAxios.get(`follow/${id}`).then((response) => response.data),
  follow: (id) => instanceAxios.post(`follow/${id}`),
  unfollow: (id) => instanceAxios.delete(`follow/${id}`),
};

export const profileAPI = {
  getProfile: (id) => instanceAxios.get(`profile/${id}`),
  getStatus: (id) => instanceAxios.get(`profile/status/${id}`).then((response) => response.data),
  putStatus: (status) => instanceAxios.put('profile/status', { status }),
};
