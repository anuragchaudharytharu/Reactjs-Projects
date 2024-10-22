import { useUserStore } from '../../zustandstatemanagement/UserStore';

export default function UserInfo() {
  const { currentUser } = useUserStore();

  return (
    <div className="flex p-[20px] items-center justify-between">
      <div className="flex items-center gap-[20px]">
        <img
          src={currentUser.avatar || 'avatar.png'}
          className="w-[50px] h-[50px] rounded-[50%] object-cover"
        />
        <h2 className="font-bold text-[18px]">{currentUser.username}</h2>
      </div>
      <div className="flex gap-[20px]">
        <img src="more.png" className="w-[20px] h-[20px] cursor-pointer" />
        <img src="video.png" className="w-[20px] h-[20px] cursor-pointer" />
        <img src="edit.png" className="w-[20px] h-[20px] cursor-pointer" />
      </div>
    </div>
  );
}
