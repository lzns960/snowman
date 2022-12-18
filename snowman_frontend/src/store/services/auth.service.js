import axios from "axios";

const API_URL = "http://localhost:8080";

const register = (email, password, nickname) => {
  return axios.post(API_URL + "/api/auth/signup", {
    email,
    password,
    nickname,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "/api/auth/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};