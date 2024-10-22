import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, googleAuth } from '../firebase-config/firebase-config';
import { ShopContext } from '../context/ShopContext';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { loginWithEmailAndPassword, loginWithGoogle, darkMode } =
    useContext(ShopContext);

  const navigate = useNavigate();

  const handleSignInWithEmailAndPassword = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await loginWithEmailAndPassword(email, password);
      navigate('/', { replace: true });
      alert('You are logged in with email and password');
    } catch (err) {
      setError(err.message);
      alert(error);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await loginWithGoogle(auth, googleAuth);
      navigate('/', { replace: true });
      alert('You are logged in with Google');
    } catch (err) {
      setError(err.message);
      alert(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-[30px] h-screen border-t">
      <p>
        <span className="text-red-700 text-[18px] font-semibold">
          Don&apos;t have an account yet ?{' '}
        </span>

        <Link
          to="/signup"
          className={`px-[10px] py-[4px] rounded-md underline ${
            darkMode ? '' : 'bg-black text-white'
          }`}
        >
          Sign Up
        </Link>
      </p>

      <div className="flex flex-col items-center justify-center gap-[10px]">
        <h1 className="text-[20px] font-semibold text-blue-900">
          Sign in to your account
        </h1>

        <form
          className="flex flex-col items-center justify-center gap-[4px]"
          onSubmit={handleSignInWithEmailAndPassword}
        >
          <div className="flex flex-col items-start justify-center">
            <label htmlFor="email" className="text-[18px]">
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className={`${
                darkMode ? 'bg-slate-600' : 'bg-white'
              }  w-[350px] border-[2px] p-[4px] border-black rounded-[4px]`}
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <label htmlFor="password" className="text-[18px]">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className={`${
                darkMode ? 'bg-slate-600' : 'bg-white'
              }  w-[350px] border-[2px] p-[4px] border-black rounded-[4px]`}
            />
          </div>

          <button
            type="submit"
            className={`bg-blue-950 ${
              darkMode ? '' : 'text-white'
            } py-[6px] w-full rounded-[4px] mt-[10px]`}
          >
            Sign In
          </button>
        </form>

        <button
          onClick={handleSignInWithGoogle}
          className={`bg-red-950 py-[6px] w-full rounded-[4px] mt-[10px] ${
            darkMode ? '' : 'text-white'
          }`}
        >
          Sign In With Google
        </button>
      </div>
    </div>
  );
}
