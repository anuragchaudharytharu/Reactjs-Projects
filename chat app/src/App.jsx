import { useEffect } from 'react';
import LoginSignup from './components/auth/loginsignup/LoginSignup';
import Chat from './components/chat/Chat';
import Details from './components/details/Details';
import List from './components/list/List';
import Notification from './components/notifications/Notification';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/config/firebase-config';
import { useUserStore } from './components/zustandstatemanagement/UserStore';

export default function App() {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unsubscribe();
    };
  }, [fetchUserInfo]);

  // console.log(currentUser);

  if (isLoading)
    return (
      <div className="p-[50px] text-[36px] rounded-[10px] bg-[rgba(17,25,40,0.9)]">
        Loading...
      </div>
    );

  return (
    <div className="container w-[80vw] h-[90vh] bg-[rgb(17,25,40,0.75)] flex overflow-hidden">
      {currentUser ? (
        <>
          <List />
          <Chat />
          <Details />
        </>
      ) : (
        <LoginSignup />
      )}

      <Notification />
    </div>
  );
}
