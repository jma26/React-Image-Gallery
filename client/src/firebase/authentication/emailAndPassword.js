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
      console.log(form);
      // Create new user document in MongoDB
      let mongoDBUser = await createUserAccount(form);
      console.log('New user in MongoDB', mongoDBUser);

      // Create new user in Firebase
      let firebaseUser = await auth.createUserWithEmailAndPassword(form['email'], form['password']);
      console.log('New user in Firebase', firebaseUser);
      // await db.collection('users').add({
      //   ...form,
      //   uid: user.uid,
      //   total_photos: 0,
      //   followers_count: 0,
      //   following_count: 0
      // });
    } catch (err) {
      // Add Firebase error codes
      // auth/email-already-in-use
      // auth/invalid-email
      // auth/operation-now-allowed
      // auth/weak-password
      return err;
    }
  };

  return {
    signInWithEmailAndPassword,
    registerWithEmailAndPassword
  }
}
