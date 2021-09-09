import { auth,  db } from '../firebase';

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
      let userCredential = await auth.createUserWithEmailAndPassword(form['email'], form['password']);
      let user = userCredential.user;
      await db.collection('users').add({
        ...form,
        uid: user.uid
      });
      return user;
    } catch (err) {
      return err;
    }
  };

  return {
    signInWithEmailAndPassword,
    registerWithEmailAndPassword
  }
}