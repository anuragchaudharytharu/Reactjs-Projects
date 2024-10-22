import ChatList from './chatlist/ChatList';
import UserInfo from './userinfo/UserInfo';

export default function List() {
  return (
    <div className="flex-1 flex flex-col">
      <UserInfo />
      <ChatList />
    </div>
  );
}
