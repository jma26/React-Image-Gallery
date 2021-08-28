import { auth } from '../firebase';

const signInWithEmailPass = async function(email, password) {
  try {
    await auth.signInWithEmailPass(email, password);
  } catch(err) {
    console.error(err);
    alert(err.message);
  }
};

export default signInWithEmailPass;