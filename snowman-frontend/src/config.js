const BASE_URL = 'https://proxy.cors.sh/https://web-snowman-20z52flc2u4w7q.gksl2.cloudtype.app/';
// const BASE_URL = process.env.REACT_APP_SNOWMAN_API_URL;

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
