import { auth } from '../firebase';

export default function authStates() {

  const checkAuthStatus = function() {
    return new Promise(function(resolve, reject) {
      auth.onAuthStateChanged((user) => {
        if (user) {
          console.log('User is logged in');
          resolve(user);
        } else {
          reject('No user authenticated');
        }
      })
    })
  }

  const authSignOut = function() {
    return new Promise(function(resolve, reject) {
      auth.signOut().then(() => {
        console.log('Successfully signed out!');
        resolve(true);
      }).catch((error) => {
        console.log(error);
        reject(error);
      })
    })
  };

  return {
    checkAuthStatus,
    authSignOut
  }
}