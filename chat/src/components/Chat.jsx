import { useEffect, useState } from 'react';
import { auth, db } from '../config/firebase-config';
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from 'firebase/firestore';

export default function Chat({ room }) {
  const [newMessage, setNewMessage] = useState('');

  const [messages, setMessages] = useState([]);

  const messageRef = collection(db, 'messages');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (newMessage === '') return;
      console.log(newMessage);

      await addDoc(messageRef, {
        text: newMessage,
        createdAt: serverTimestamp(),
        user: auth.currentUser.displayName,
        room: room,
      });

      setNewMessage('');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const queryMessages = query(
      messageRef,
      where('room', '==', room),
      orderBy('createdAt')
    );

    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];

      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });

      setMessages(messages);
    });

    return () => unsubscribe();
  }, [messageRef, room]);

  return (
    <div className="flex flex-col rounded-md justify-between w-[600px] h-[600px] bg-black">
      <div className="h-[50px] bg-red-950 rounded-t-md flex items-center justify-center">
        <h1 className="text-[24px]">Welcome to Room: {room}</h1>
      </div>
      <div className="flex flex-col flex-wrap p-[10px]">
        {messages.map((message) => (
          <div key={message.id} className="flex flex-wrap">
            <h1 className="font-bold text-green-800">{message.user}: </h1>
            <h1 className="text-wrap">{message.text}</h1>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex justify-between h-[50px] border-[2px] border-slate-100">
          <input
            className="w-full bg-slate-700 "
            placeholder="Type your message here..."
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
          />
          <button
            type="submit"
            className="bg-slate-400 font-medium text-black py-[1.5px] px-[10px] border-l-[2px] border-slate-100"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
