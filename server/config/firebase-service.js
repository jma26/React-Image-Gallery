const admin = require('firebase-admin');
require('dotenv').config();

module.exports = admin.initializeApp({
  credential: admin.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS),
  databaseURL: 'https://reactagram-26507-default-rtdb.firebaseio.com'
});