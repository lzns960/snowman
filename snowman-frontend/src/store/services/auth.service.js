import axios from 'axios';
import { API } from '../../config';

axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
axios.defaults.withCredentials = true;

const register = (email, password, nickname) => {
  return axios.post(API.REGISTER, JSON.stringify({    
    email,
    password,
    nickname,}),{withCredentials: true});
};



const login = (email, password) => {
  return axios
    .post(API.LOGIN, JSON.stringify({email,password}))
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const AuthService = {
  register,
  login,
  logout,
};

export default AuthService;
