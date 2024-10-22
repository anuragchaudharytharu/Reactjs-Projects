import { useRef, useState } from 'react';

export default function Room() {
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);
  return (
    <div className="flex flex-col items-center justify-center gap-[20px]">
      <label className="text-[32px] font-bold text-red-950">
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
  );
}
