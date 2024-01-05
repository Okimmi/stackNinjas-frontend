import axios from 'axios';

export const $instance = axios.create({
  baseURL: 'https://stackninjas-backend.onrender.com',
});

// export const $instance = axios.create({
//   baseURL: 'http://localhost:3001',
// });
