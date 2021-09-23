import axios from 'axios';

export const createUserAccount = (formData) => {
  return axios.post('http://localhost:8080/users/signup', formData).then(res => {
    return res;
  });
}

export const loginUser = (formData) => {
  return axios.post('https://localhost:8080/users/login', formData).then(res => {
    return res;
  })
}

export const getUserAccount = () => {
  return axios.post('https://localhost:8080/users/getUserAccount').then(res => {
    return res;
  })
}