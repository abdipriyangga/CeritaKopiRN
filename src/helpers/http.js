import axios from 'axios';

const http = (token = null) => {
  const headers = {};
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return axios.create({
    headers,
  });
};
export default http;
