import { useContext } from 'react';
import { assets } from '../assets/frontend/assets';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';
import NewsLetterBox from '../components/NewsLetterBox';

export default function About() {
  const { darkMode } = useContext(ShopContext);

  return (
    <div>
      <div className="pt-8 text-2xl text-center border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="flex flex-col gap-16 my-10 md:flex-row">
        <img src={assets.about_img} className="w-full md:max-w-[450px]" />
        <div
          className={`flex flex-col justify-center gap-6  md:w-2/4 ${
            darkMode ? 'text-white' : 'text-gray-600'
          }`}
        >
          <p>
            This site was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we&apos;ve worked tirelessly to curate a
            diverse selection of high-quality products that cater to every taste
            and preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <b className={` ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
            Our Mission
          </b>
          <p>
            Our mission is to empower customers with choice, convenience, and
            confidence. We&apos;re dedicated to providing a seamless shopping
            experience that exceeds expectations, from browsing and ordering to
            delivery and beyond.
          </p>
        </div>
      </div>

      <div className="py-4 text-xl">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col mb-20 text-sm md:flex-row">
        <div className="flex flex-col px-10 py-8 border md:px-16 sm:py-20 gap5">
          <b>Quality Assurance:</b>
          <p>
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="flex flex-col px-10 py-8 border md:px-16 sm:py-20 gap5">
          <b>Convenience:</b>
          <p>
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="flex flex-col px-10 py-8 border md:px-16 sm:py-20 gap5">
          <b>Exceptional Customer Service:</b>
          <p>
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
}
