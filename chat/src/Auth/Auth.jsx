import { signInWithPopup } from 'firebase/auth';
import { auth, googleAuth } from '../config/firebase-config';
import Cookies from 'universal-cookie';

export default function Auth({ setIsAuth }) {
  const cookies = new Cookies();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuth);
      console.log(result);
      cookies.set('auth', result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-[24px] font-bold">Sign in with Google to Continue</p>
      <button
        className="bg-red-950 py-1 px-[10px] rounded-[4px]"
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </button>
    </div>
  );
}
