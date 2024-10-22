import { useState, useRef } from 'react';
import Auth from './Auth/Auth';
import Cookies from 'universal-cookie';
import Chat from './components/Chat';
import { signOut } from 'firebase/auth';
import { auth } from './config/firebase-config';

const cookies = new Cookies();
export default function App() {
  const [isAuth, setIsAuth] = useState(cookies.get('auth'));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove('auth');
    setIsAuth(false);
    setRoom(null);
  };

  if (!isAuth) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen gap-[20px]">
        <div>
          {room ? (
            <Chat room={room} />
          ) : (
            <div className="flex flex-col items-center justify-center gap-[20px]">
              <label className="text-[32px] font-bold text-red-900">
                Enter Room Name
              </label>
              <div className="w-[300px] flex flex-col items-center justify-center gap-[10px]">
                <input
                  className="w-[300px] bg-slate-950 border-[2px] border-black rounded-[4px]"
                  ref={roomInputRef}
                />
                <button
                  className="bg-black w-full py-1 px-[10px] rounded-[4px]"
                  onClick={() => setRoom(roomInputRef.current.value)}
                >
                  Enter Chat
                </button>
              </div>
            </div>
          )}
        </div>
        <div>
          <button
            className="px-[10px] py-[2px] text-black bg-slate-200  rounded-[4px]"
            onClick={signUserOut}
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
}
