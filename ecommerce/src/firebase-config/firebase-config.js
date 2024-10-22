import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBSbrdyNzxSzOGWDIYZKeftalucrCKlrU8',
  authDomain: 'fir-authwithprotectedroute.firebaseapp.com',
  projectId: 'fir-authwithprotectedroute',
  storageBucket: 'fir-authwithprotectedroute.appspot.com',
  messagingSenderId: '1079900642777',
  appId: '1:1079900642777:web:718aa20f94a629a5a30dc8',
  measurementId: 'G-20GL5K5QV2',
};

const app = initializeApp(firebaseConfig);

//emai and password
export const auth = getAuth(app);

//google
export const googleAuth = new GoogleAuthProvider(app);
