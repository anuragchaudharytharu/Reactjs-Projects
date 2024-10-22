import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

export default function Profile() {
  const { user } = useContext(ShopContext);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <img
        src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?size=626&ext=jpg&ga=GA1.1.830195206.1729414589&semt=ais_hybrid"
        className="w-[300px] h-[300px]"
      />
      <div className="flex flex-col">
        <h1 className="text-[32px]">
          User: <span className="text-red-900">{user.displayName}</span>
        </h1>
        <p className="text-[24px]">
          Email: <span className="text-green-700">{user.email}</span>
        </p>
      </div>
    </div>
  );
}
