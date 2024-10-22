import { useContext, useState } from 'react';
import { assets } from '../assets/frontend/assets';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

export default function NavBar() {
  const {
    logout,
    showSearch,
    user,
    setShowSearch,
    getCartCount,
    darkMode,
    setDarkMode,
  } = useContext(ShopContext);

  const [visible, setVisible] = useState(false);

  const navLogin = useNavigate();

  const handleGotoLoginPageClick = () => {
    user ? navLogin('/') : navLogin('/signin');
  };

  const handleLogoutClick = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* Left navbar menu */}
      <Link to="/">
        <img
          src={assets.logo}
          className="w-[60px] h-[60px] rounded-[50%]"
          alt=""
        />
      </Link>

      {/* Middle navbar menu */}
      <ul className="hidden gap-5 text-sm text-gray-700 sm:flex">
        <NavLink
          to="/"
          className={`flex flex-col justify-center gap-1 item-center ${
            darkMode ? 'text-white' : ''
          }`}
        >
          <p>HOME</p>
          <div className="flex items-center justify-center">
            <hr
              className={`${
                darkMode ? 'bg-white' : 'bg-gray-700'
              } hidden w-[50%] border-none h-[1.5px]`}
            />
          </div>
        </NavLink>

        <NavLink
          to="/collection"
          className={`${
            darkMode ? 'text-white' : ''
          } flex flex-col justify-center gap-1 item-center`}
        >
          <p>COLLECTION</p>
          <div className="flex items-center justify-center">
            <hr
              className={`hidden w-[50%] border-none h-[1.5px] ${
                darkMode ? 'bg-white' : 'bg-gray-700'
              }`}
            />
          </div>
        </NavLink>

        <NavLink
          to="/about"
          className={`${
            darkMode ? 'text-white' : ''
          } flex flex-col justify-center gap-1 item-center`}
        >
          <p>ABOUT</p>
          <div className="flex items-center justify-center">
            <hr
              className={`${
                darkMode ? 'bg-white' : 'bg-gray-700'
              } hidden w-[50%] border-none h-[1.5px]`}
            />
          </div>
        </NavLink>

        <NavLink
          to="/contact"
          className={`${
            darkMode ? 'text-white' : ''
          } flex flex-col justify-center gap-1 item-center`}
        >
          <p>CONTACT</p>
          <div className="flex items-center justify-center">
            <hr
              className={`hidden w-[50%] border-none h-[1.5px] ${
                darkMode ? 'bg-white' : 'bg-gray-700'
              }`}
            />
          </div>
        </NavLink>
      </ul>

      {/* Right navbar menu */}
      <div className="flex items-center gap-6">
        <div>
          {darkMode ? (
            <button
              className="text-slate-300 bg-slate-900 px-[8px] rounded-[10px]"
              onClick={() => setDarkMode((prevState) => !prevState)}
            >
              Light
            </button>
          ) : (
            <button
              className="bg-slate-900 px-[8px]  rounded-[10px] text-white"
              onClick={() => setDarkMode((prevState) => !prevState)}
            >
              Dark
            </button>
          )}
        </div>

        <div
          className={`flex items-center gap-6 ${
            darkMode ? 'px-4 py-[4.5px] bg-slate-200 rounded-[10px]' : ''
          }`}
        >
          <img
            src={assets.search_icon}
            alt=""
            className="w-5 cursor-pointer"
            onClick={() =>
              showSearch ? setShowSearch(false) : setShowSearch(true)
            }
          />

          <div className="relative group">
            <img
              src={
                user
                  ? 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?size=626&ext=jpg&ga=GA1.1.830195206.1729414589&semt=ais_hybrid'
                  : assets.profile_icon
              }
              alt=""
              className={`w-5 cursor-pointer ${
                user ? 'w-8 h-8 rounded-[50%]' : ''
              }`}
              onClick={handleGotoLoginPageClick}
            />

            {user && (
              <div className="absolute right-0 hidden pt-4 group-hover:block dropdown-menu">
                <div className="flex flex-col gap-2 px-5 py-3 text-gray-500 rounded w-36 bg-slate-100">
                  <Link to={'/profile'}>
                    <p className="cursor-pointer hover hover:text-black">
                      My Profile
                    </p>
                  </Link>
                  <Link to="/orders">
                    <p className="cursor-pointer hover hover:text-black">
                      Orders
                    </p>
                  </Link>
                  <p
                    className="cursor-pointer hover hover:text-black"
                    onClick={handleLogoutClick}
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>

          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} alt="" className="w-5 min-w-5" />

            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>

          <img
            src={assets.menu_icon}
            alt=""
            className="w-5 cursor-pointer sm:hidden"
            onClick={() => setVisible(true)}
          />
        </div>
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden  transition-all duration-500 ${
          visible ? 'w-full h-full ease-out' : 'w-0 h-0 ease-in'
        } ${darkMode ? 'text-white bg-black' : 'bg-white'}`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            className="flex items-center gap-4 p-3 cursor-pointer"
            onClick={() => setVisible(false)}
          >
            <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          <NavLink
            to="/"
            className={`py-2 pl-6 border ${darkMode ? 'border-none' : ''}`}
            onClick={() => setVisible(false)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/collection"
            className={`${darkMode ? 'border-none' : ''} py-2 pl-6 border`}
            onClick={() => setVisible(false)}
          >
            COLLECTION
          </NavLink>
          <NavLink
            to="/about"
            className={`py-2 pl-6 border ${darkMode ? 'border-none' : ''}`}
            onClick={() => setVisible(false)}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className={`py-2 pl-6 border ${darkMode ? 'border-none' : ''}`}
            onClick={() => setVisible(false)}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
}
