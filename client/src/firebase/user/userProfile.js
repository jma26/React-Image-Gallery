import { auth, db } from '../firebase';

export default function userProfile() {

  const getUserProfile = async function() {
    try {
      let userId = await auth.currentUser.uid;
      let userDoc = await db.collection('users').where('uid', '==', userId).get().then((querySnapshot => {
        let user;
        querySnapshot.forEach(doc => {
          user = doc.data();
        })
        return user;
      }));
      return userDoc;
    } catch (err) {
      console.log(err);
    }
  }

  return {
    getUserProfile
  }
}