const BASE_URL = process.env.REACT_APP_API_URL;
export const API = {
  REGISTER: `${BASE_URL}/api/auth/signup`,
  LOGIN: `${BASE_URL}/api/auth/login`,
  SNOWMAN: `${BASE_URL}/api/snowmans/`,
  USER: `${BASE_URL}/api/users/me`,
  SNOWMANPOST: `${BASE_URL}/api/snowmans`,
};

// export const API = {
//   REGISTER: `${BASE_URL}/api/auth/signup`,
//   LOGIN: `${BASE_URL}/api/auth/login`,
//   SNOWMAN: `${BASE_URL}/api/snowmans/`,
//   USER: `${BASE_URL}/api/users/me`,
//   SNOWMANPOST: `${BASE_URL}/api/snowmans`,
// };
