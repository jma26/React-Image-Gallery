import { auth,  db } from '../firebase';

export default function authentication() {

  const signInWithEmailAndPassword = async function(email, password) {
    try {
      let res = await auth.signInWithEmailPass(email, password);
      let user = res.user;
      console.log(user);
    } catch (err) {
      console.error(err);
    }
  };

  const registerWithEmailAndPassword = async function(registeree) {
    try {
      let res = await auth.createUserWithEmailAndPassword(registeree['email'], registeree['password']);
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
