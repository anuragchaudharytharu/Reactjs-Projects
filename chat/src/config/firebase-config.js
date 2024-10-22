import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCuEzhVgjInqcdiSv7n6H6CiMsgzJIFZhs',
  authDomain: 'chat-learn-e2589.firebaseapp.com',
  projectId: 'chat-learn-e2589',
  storageBucket: 'chat-learn-e2589.appspot.com',
  messagingSenderId: '674833094310',
  appId: '1:674833094310:web:f228f6cff5d2a21b5d4667',
  measurementId: 'G-P77SQCG2TZ',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
export const db = getFirestore(app);
