import { auth } from '../firebase';

export default function authStates() {

  const checkAuthStatus = function() {
    return new Promise(function(resolve, reject) {
      auth.onAuthStateChanged((user) => {
        console.log('User is logged in');
        if (user) {
          resolve(user);
        } else {
          reject('No user authenticated');
        }
      })
    })
  }

  return {
    checkAuthStatus
  }
}