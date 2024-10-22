import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { auth, db } from '../../config/firebase-config';
import { doc, setDoc } from 'firebase/firestore';
import { upload } from '../../config/upload';

export default function LoginSignup() {
  const [avatar, setAvatar] = useState({
    file: null,
    url: '',
  });

  const [loading, setLoading] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const imgURL = await upload(avatar.file);

      await setDoc(doc(db, 'users', res.user.uid), {
        username: username,
        email: email,
        id: res.user.uid,
        avatar: imgURL,
        blocked: [],
        password: password,
      });

      await setDoc(doc(db, 'userchats', res.user.uid), {
        chats: [],
      });

      toast.success('Account creates. You can Login Now');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex items-center gap-[100px]">
      <div className="flex-1 flex flex-col items-center gap-[20px]">
        <h2>Welcome back,</h2>
        <form
          className="w-[300px] flex flex-col items-center justify-center gap-[20px]"
          onSubmit={handleLogin}
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-[10px] w-full border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-[5px]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-[10px] w-full border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-[5px]"
          />
          <button
            className={`w-full p-[10px] border-none text-white rounded-[5px] ${
              loading
                ? 'cursor-not-allowed bg-[#1e1e4644]'
                : 'bg-[#1e1e46] cursor-pointer'
            }`}
            type="submit"
            disabled={loading}
          >
            {loading ? 'Loading' : 'Sign In'}
          </button>
        </form>
      </div>

      {/* separator */}
      <div className="h-[80%] w-[2px] bg-[#dddddd35]"></div>

      {/* signup */}
      <div className="flex-1 flex flex-col items-center gap-[20px]">
        <h2>Creat an Account</h2>
        <form
          className="w-[300px] flex flex-col items-center justify-center gap-[20px]"
          onSubmit={handleRegister}
        >
          <div>
            <label
              htmlFor="file"
              className="w-full flex items-center justify-between underline cursor-pointer gap-[30px]"
            >
              <img
                src={avatar.url || 'avatar.png'}
                alt=""
                className="w-[50px] h-[50px] rounded-[10px] object-cover opacity-[0.6]"
              />
              Upload an Image
            </label>
            <input
              type="file"
              id="file"
              className="hidden"
              onChange={handleAvatar}
            />
          </div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="p-[10px] w-full border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-[5px]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-[10px] w-full border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-[5px]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-[10px] w-full border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-[5px]"
          />
          <button
            className={`w-full p-[10px] border-none text-white rounded-[5px]  ${
              loading
                ? 'cursor-not-allowed bg-[#1e1e4644]'
                : 'bg-[#1e1e46] cursor-pointer'
            }`}
            type="submit"
            disabled={loading}
          >
            {loading ? 'Loading' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
}
