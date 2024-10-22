import { useContext } from 'react';
import { assets } from '../assets/frontend/assets';
import { ShopContext } from '../context/ShopContext';

export default function OurPolicy() {
  const { darkMode } = useContext(ShopContext);
  return (
    <div className="flex flex-col justify-around gap-12 py-20 text-xs text-center text-gray-700 sm:flex-row sm:gap-2 sm:text-sm md:text-base">
      <div>
        <img
          src={assets.exchange_icon}
          alt=""
          className={`${darkMode ? 'rounded-[50%]' : ''} w-12 m-auto mb-5 `}
        />
        <p className={`font-semibold ${darkMode ? 'text-white' : ''}`}>
          Easy Exchange Policy
        </p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>

      <div>
        <img src={assets.quality_icon} alt="" className="w-12 m-auto mb-5" />
        <p className={`${darkMode ? 'text-white' : ''} font-semibold`}>
          7 Days Return Policy
        </p>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </div>

      <div>
        <img
          src={assets.support_img}
          alt=""
          className={`w-12 m-auto mb-5 ${
            darkMode ? 'rounded-[50%]' : 'rounded-[50%]'
          }`}
        />
        <p className={`font-semibold ${darkMode ? 'text-white' : ''}`}>
          Best Customer Support
        </p>
        <p className="text-gray-400">we provide 24/7 customer support</p>
      </div>
    </div>
  );
}
