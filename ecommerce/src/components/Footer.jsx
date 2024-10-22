import { Link } from 'react-router-dom';
import { assets } from '../assets/frontend/assets';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

export default function Footer() {
  const { darkMode } = useContext(ShopContext);

  return (
    <div>
      {/* ------------Footer Top----------*/}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ----------Left Section of Top Footer----------- */}
        <div>
          <Link to="/">
            <img
              src={assets.logo}
              alt=""
              className="w-32 h-32 rounded-[50%] mb-5"
            />
          </Link>
          <p
            className={`w-full md:w-2/3 ${
              darkMode ? 'text-white' : 'text-gray-600'
            }`}
          >
            Apparel was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
        </div>

        {/* ----------Middle Section of Top Footer----------- */}
        <div>
          <p
            className={`${
              darkMode ? 'text-orange-900' : ''
            } mb-5 text-xl font-medium`}
          >
            COMPANY
          </p>
          <ul
            className={`${
              darkMode ? 'text-white' : 'text-gray-600'
            } flex flex-col gap-1`}
          >
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link>
              <li>Delivery</li>
            </Link>
            <Link>
              <li>Privacy policy</li>
            </Link>
          </ul>
        </div>

        {/* ----------Right Section of Top Footer----------- */}
        <div>
          <p
            className={`${
              darkMode ? 'text-orange-900' : ''
            } mb-5 text-xl font-medium`}
          >
            GET IN TOUCH
          </p>
          <ul
            className={`${
              darkMode ? 'text-white' : 'text-gray-600'
            } flex flex-col gap-1`}
          >
            <li>+1-000-000-0000</li>
            <li>ianurag2000@gmail.com</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      {/* ----------Footer Bottom: Copyright text----------- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ deeium.dev - All Right Reserved.
        </p>
      </div>
    </div>
  );
}
