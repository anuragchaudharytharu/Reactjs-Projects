import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

export default function NewsLetterBox() {
  const { darkMode } = useContext(ShopContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-center">
      <p
        className={`text-2xl font-medium ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}
      >
        Subscribe now & get 20% off
      </p>
      <p className="mt-3 text-gray-400">
        Subscribe to our store for latest fashion items and get updated with the
        current fashion trends.
      </p>
      <form
        className={`flex items-center w-full gap-3 pl-3 mx-auto my-6 border sm:w-1/2 ${
          darkMode ? 'bg-white' : ''
        }`}
        onSubmit={onSubmitHandler}
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          className={`w-full outline-none sm:flex-1 ${
            darkMode ? 'text-black' : 'text-white'
          }`}
        />
        <button
          type="submit"
          className={`px-10 py-4 text-xs ${
            darkMode ? 'bg-gray-800 text-white' : 'text-white bg-black'
          }`}
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}
