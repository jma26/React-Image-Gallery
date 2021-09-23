import axios from 'axios';

export const createUserAccount = (formData) => {
  return axios.post('http://localhost:8080/users/signup', formData).then(res => {
    console.log(res);
  });
}

export const loginUser = (formData) => {
  return axios.post('https://localhost:8000/users/login', formData).then(res => {
    console.log(res);
  })
  // return auth.signInWithEmailAndPassword(email, password);
}