import { auth,  db } from '../firebase';

export default function authentication() {

  const signInWithEmailAndPassword = async function(email, password) {
    try {
      await auth.signInWithEmailPass(email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const registerWithEmailAndPassword = async function(registeree) {
    try {
      const res = await auth.createUserWithEmailAndPassword(registeree['email'], registeree['password']);
      const user = res.user;
      await db.collection('users').add({
        ...registeree,
        uid: user.uid
      });
    } catch (err) {
      console.error(err);
    }
  };

  return {
    signInWithEmailAndPassword,
    registerWithEmailAndPassword
  }
}
