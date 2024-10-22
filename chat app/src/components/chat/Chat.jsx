import EmojiPicker from 'emoji-picker-react';
import { useEffect, useRef, useState } from 'react';

export default function Chat() {
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [inputText, setInputText] = useState('');

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleEmoji = (e) => {
    // console.log(e);
    setInputText((prev) => prev + e.emoji);
    setEmojiOpen(false);
  };

  return (
    <div className="flex-[2] border-x-[1px] border-x-solid border-x-[#dddddd35] h-[100%] flex flex-col">
      {/* top */}
      <div className="p-[20px] flex items-center justify-between border-b-[1px] border-b-solid border-b-[#dddddd35]">
        {/* users */}
        <div className="flex items-center gap-[20px]">
          <img
            src="avatar.png"
            className="w-[60px] h-[60px] rounded-[50%] object-cover"
          />
          <div className="flex flex-col gap-[5px]">
            <span className="text-[18px] font-bold">Jane Chan</span>
            <p className="text-[14px] font-[300] text-[#a5a5a5]">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

        {/* icons */}
        <div className="flex gap-[20px]">
          <img src="phone.png" className="w-[20px] h-[20px]" />
          <img src="video.png" className="w-[20px] h-[20px]" />
          <img src="info.png" className="w-[20px] h-[20px]" />
        </div>
      </div>

      {/* center */}
      <div className="p-[20px] overflow-y-scroll flex flex-col gap-[20px]">
        <div className="message max-w-[70%] flex gap-[20px]">
          <img
            src="avatar.png"
            className="w-[30px] h-[30px] rounded-[50%] object-cover"
          />
          <div className="flex-1 flex flex-col gap-[5px]">
            <p className="p-[20px] bg-[rgba(4,6,10,0.3)] rounded-[10px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
              velit cupiditate itaque non sunt quos nulla adipisci, suscipit
              unde consequatur.
            </p>
            <span className="text-[13px]">1 min ago</span>
          </div>
        </div>

        <div className="message-own max-w-[70%] flex gap-[20px] self-end">
          <div className="flex-1 flex flex-col gap-[5px]">
            <p className="bg-[#172446] p-[20px] rounded-[10px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
              velit cupiditate itaque non sunt quos nulla adipisci, suscipit
              unde consequatur.
            </p>
            <span className="text-[13px]">1 min ago</span>
          </div>
          <img
            src="avatar.png"
            className="w-[30px] h-[30px] rounded-[50%] object-cover"
          />
        </div>

        <div className="message max-w-[70%] flex gap-[20px]">
          <img
            src="avatar.png"
            className="w-[30px] h-[30px] rounded-[50%] object-cover"
          />
          <div className="flex-1 flex flex-col gap-[5px]">
            <p className="p-[20px] bg-[rgba(4,6,10,0.3)] rounded-[10px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
              velit cupiditate itaque non sunt quos nulla adipisci, suscipit
              unde consequatur.
            </p>
            <span className="text-[13px]">1 min ago</span>
          </div>
        </div>

        <div className="message-own max-w-[70%] flex gap-[20px] self-end">
          <div className="flex-1 flex flex-col gap-[5px]">
            <img
              src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="h-[300px] w-full rounded-[10px] object-cover"
            />
            <p className="bg-[#172446] p-[20px] rounded-[10px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
              velit cupiditate itaque non sunt quos nulla adipisci, suscipit
              unde consequatur.
            </p>
            <span className="text-[13px]">1 min ago</span>
          </div>
          <img
            src="avatar.png"
            className="w-[30px] h-[30px] rounded-[50%] object-cover"
          />
        </div>

        <div ref={endRef}></div>
      </div>

      {/* bottom */}
      <div className="p-[20px] flex items-center justify-between border-t-[1px] border-t-solid border-t-[#dddddd35] gap-[20px] mt-auto">
        <div className="flex gap-[20px]">
          <img src="img.png" className="w-[20px] h-[20px] cursor-pointer" />
          <img src="camera.png" className="w-[20px] h-[20px] cursor-pointer" />
          <img src="mic.png" className="w-[20px] h-[20px] cursor-pointer" />
        </div>
        <input
          value={inputText}
          type="text"
          placeholder="Type a message..."
          className="flex-1 bg-[rgba(17,25,40,0.5)] border-none outline-none text-white p-[20px] rounded-[10px] text-[16px]"
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="relative">
          <img
            src="emoji.png"
            className="w-[20px] h-[20px] cursor-pointer"
            onClick={() => setEmojiOpen((prevState) => !prevState)}
          />
          <div className="absolute bottom-[50px] left-0">
            <EmojiPicker open={emojiOpen} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="bg-[#0b1f50] text-white py-[10px] px-[20px] rounded-[5px] cursor-pointer">
          Send
        </button>
      </div>
    </div>
  );
}
