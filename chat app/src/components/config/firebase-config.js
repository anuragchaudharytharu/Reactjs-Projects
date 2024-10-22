import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'chatwebapp-25d00.firebaseapp.com',
  projectId: 'chatwebapp-25d00',
  storageBucket: 'chatwebapp-25d00.appspot.com',
  messagingSenderId: '826980194922',
  appId: '1:826980194922:web:8c7ebcddf0a89504740813',
  measurementId: 'G-S3WP4GNK37',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
