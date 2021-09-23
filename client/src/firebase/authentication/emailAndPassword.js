import { auth,  db } from '../firebase';
import { createUserAccount } from '../../api/Users';

export default function authentication() {

  const signInWithEmailAndPassword = async function(form) {
    try {
      let userCredential = await auth.signInWithEmailAndPassword(form['email'], form['password']);
      let user = userCredential.user;
      return user;
    } catch (err) {
      return err;
    }
  };

  const registerWithEmailAndPassword = async function(form) {
    try {
      // Create new user in Firebase
      let firebaseUser = auth.createUserWithEmailAndPassword(form['email'], form['password']);
      // Create new user document in MongoDB
      let mongoDBUser = createUserAccount(form);
      
      const registration = await Promise.all([firebaseUser, mongoDBUser])
      console.log('emailAndPassword', registration);

      // Return user doc from MongoDB
      return registration[1].data

    } catch (err) {
      console.log('emailAndPassword', err.message);
      return err;
    }
  };

  return {
    signInWithEmailAndPassword,
    registerWithEmailAndPassword
  }
}
