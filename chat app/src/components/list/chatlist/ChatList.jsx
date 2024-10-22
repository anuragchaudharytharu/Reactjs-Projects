import { useEffect, useState } from 'react';
import AddUser from './adduser/AddUser';
import { useUserStore } from '../../zustandstatemanagement/UserStore';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../config/firebase-config';

export default function ChatList() {
  const [addMode, setAddMode] = useState(false);

  const [chats, setChats] = useState([]);

  const { currentUser } = useUserStore();

  useEffect(() => {
    const unsub = onSnapshot(
      doc(db, 'userchats', currentUser.id),
      async (res) => {
        const items = res.data().chats;

        const promises = items.map(async (item) => {
          const userDocRef = doc(db, 'users', item.recieverId);
          const userDocSnap = getDoc(userDocRef);

          const user = (await userDocSnap).data();

          return { ...item, user };
        });

        const chatData = await Promise.all(promises);

        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
      }
    );

    return () => {
      unsub();
    };
  }, [currentUser.id]);

  console.log(chats);

  return (
    <div className="flex-1 overflow-y-scroll scrollbar-hide scroll-smooth">
      <div className="flex items-center gap-[20px] p-[20px]">
        <div className="flex gap-[20px] items-center rounded-[10px] flex-1 bg-[rgba(17,25,40,0.5)] p-[10px]">
          <img src="search.png" className="w-[20px] h-[20px]" />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 text-white bg-transparent border-none outline-none"
          />
        </div>
        <img
          src={addMode ? 'minus.png' : 'plus.png'}
          className="w-[36px] h-[36px] bg-[rgba(17,25,40,0.5)] p-[10px] rounded-[10px] cursor-pointer"
          onClick={() => setAddMode((prevState) => !prevState)}
        />
      </div>

      {chats.map((chat) => (
        <div
          className="flex items-center gap-[20px] p-[20px] border-b-[1px] border-b-solid border-b-[#dddddd35] cursor-pointer"
          key={chat.chatId}
        >
          <img
            src="avatar.png"
            className="w-[50px] h-[50px] object-cover rounded-[50%]"
          />
          <div className="flex flex-col gap-[10px]">
            <span className="font-[500]">Jane Chan</span>
            <p className="text-[14px] font-[300]">{chat.lastMessage}</p>
          </div>
        </div>
      ))}

      {addMode && <AddUser />}
    </div>
  );
}
