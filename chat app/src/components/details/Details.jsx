import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase-config';

export default function Details() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex-1">
      {/* user */}
      <div className="px-[10px] py-[10px] flex flex-col items-center gap-[10px] border-b-[1px] border-b-solid border-b-[#dddddd35]">
        <img
          src="avatar.png"
          className="w-[100px] h-[100px] rounded-[50%] object-cover"
        />
        <h2>Jane Chan</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      {/* info */}
      <div className="p-[20px] flex flex-col gap-[12px]">
        {/* option */}
        <div>
          <div className="flex items-center justify-between">
            <span>Chat Settings</span>
            <img
              src="arrowUp.png"
              className="w-[30px] h-[30px] rounded-[50%] bg-[rgba(17,25,40,0.3)] p-[10px] cursor-pointer"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <span>Privacy & Help</span>
            <img
              src="arrowUp.png"
              className="w-[30px] h-[30px] rounded-[50%] bg-[rgba(17,25,40,0.3)] p-[10px] cursor-pointer"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <span>Shared Photos</span>
            <img
              src="arrowDown.png"
              className="w-[30px] h-[30px] rounded-[50%] bg-[rgba(17,25,40,0.3)] p-[10px] cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <img
                  src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-[40px] h-[40px] rounded-[5px] object-cover"
                />
                <span className="text-[14px] text-[lightgray] font-[300]">
                  photo_2024_2.png
                </span>
              </div>
              <img
                src="download.png"
                className="w-[30px] h-[30px] p-[10px] cursor-pointer rounded-[50%] bg-[rgba(17,25,40,0.3)]"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <img
                  src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-[40px] h-[40px] rounded-[5px] object-cover"
                />
                <span className="text-[14px] text-[lightgray] font-[300]">
                  photo_2024_2.png
                </span>
              </div>
              <img
                src="download.png"
                className="w-[30px] h-[30px] p-[10px] cursor-pointer rounded-[50%] bg-[rgba(17,25,40,0.3)]"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <img
                  src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-[40px] h-[40px] rounded-[5px] object-cover"
                />
                <span className="text-[14px] text-[lightgray] font-[300]">
                  photo_2024_2.png
                </span>
              </div>
              <img
                src="download.png"
                className="w-[30px] h-[30px] p-[10px] cursor-pointer rounded-[50%] bg-[rgba(17,25,40,0.3)]"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <span>Shared Files</span>
            <img
              src="arrowUp.png"
              className="w-[30px] h-[30px] rounded-[50%] bg-[rgba(17,25,40,0.3)] p-[10px] cursor-pointer"
            />
          </div>
        </div>

        <button className="bg-[#522323] hover:bg-[#472121] px-[20px] py-[10px] border-none rounded-[5px] text-white cursor-pointer">
          Block User
        </button>

        <button
          className="bg-[#272757] hover:bg-[#212146] px-[20px] py-[10px] border-none rounded-[5px] text-white cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
