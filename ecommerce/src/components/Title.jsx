import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

export default function Title({ text1, text2 }) {
  const { darkMode } = useContext(ShopContext);
  return (
    <div className="inline-flex items-center gap-2 mb-3">
      <p className={`${darkMode ? 'text-white' : 'text-gray-500'} font-medium`}>
        {text1}{' '}
        <span
          className={`${darkMode ? 'text-white' : 'text-gray-500'} font-medium`}
        >
          {text2}
        </span>
      </p>
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
    </div>
  );
}
