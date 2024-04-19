import admin from 'firebase-admin';

const serviceAccount = require('../firebase/serviceAccountKey.json'); // You Firebase credentials here

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://smash-gift.firebaseio.com'
});

const db = admin.firestore();

export default db;
