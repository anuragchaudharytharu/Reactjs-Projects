import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../config/firebase-config';
import { useState } from 'react';

export default function AddUser() {
  const [user, setUser] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get('username');

    try {
      const userRef = collection(db, 'users');
      const q = query(userRef, where('username', '==', username));

      const querySnapShot = await getDocs(q);

      if (!querySnapShot) {
        setUser(querySnapShot.docs[0].data());
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-[30px] bg-[rgba(17,25,40,0.95)] rounded-[10px] absolute top-0 bottom-0 left-0 right-0 m-auto w-[max-content] h-[max-content]">
      <form className="flex gap-[20px]" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="p-[20px] rounded-[10px] text-black border-none outline-none"
        />
        <button className="px-[20px] py-[10px] rounded-[10px] bg-[#121245] text-white cursor-pointer border-none">
          Search
        </button>
      </form>

      {/* user */}
      {user && (
        <div className="mt-[50px] flex items-center justify-between">
          <div className="flex items-center gap-[20px]">
            <img
              src={user.avatar || 'avatar.png'}
              className="w-[50px] h0[50px] rounded-[50%] object-cover"
            />
            <span>{user.username}</span>
          </div>
          <button className="p-[10px] rounded-[10px] bg-[#121245] text-white cursor-pointer border-none">
            Add User
          </button>
        </div>
      )}
    </div>
  );
}
