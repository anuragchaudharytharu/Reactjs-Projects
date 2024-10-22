import { useContext } from 'react';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend/assets';
import NewsLetterBox from '../components/NewsLetterBox';

export default function Contact() {
  const { darkMode } = useContext(ShopContext);

  return (
    <div>
      <div className="pt-10 text-2xl text-center border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className="flex flex-col justify-center gap-10 my-10 mb-28 md:flex-row">
        <img src={assets.contact_img} className="w-full md:max-w-[480px]" />
        <div className="flex flex-col items-start justify-center gap-6">
          <p
            className={`text-xl font-semibold ${
              darkMode ? 'text-white' : 'text-gray-600'
            }`}
          >
            Our Store
          </p>
          <p className={`${darkMode ? 'text-white' : 'text-gray-500'}`}>
            54098 Koteshwor <br /> Suite 250, Kathmandu, Nepal
          </p>
          <p className={`${darkMode ? 'text-white' : 'text-gray-500'}`}>
            Contact: 9765331189 <br /> Email: ianurag2000@gmail.com{' '}
          </p>
          <p
            className={`${
              darkMode ? 'text-white' : 'text-gray-500'
            } font-semibold text-xl`}
          >
            Careers at Apparel
          </p>
          <p className={`${darkMode ? 'text-white' : 'text-gray-500'}`}>
            Learn more about our teams and job openings.
          </p>
          <button
            className={`${
              darkMode
                ? 'bg-slate-600 text-white active:bg-orange-500 hover:bg-white hover:text-black'
                : 'bg-white text-black border hover:bg-black hover:text-white'
            } px-8 py-3 text-sm  active:bg-gray-700`}
          >
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
}
