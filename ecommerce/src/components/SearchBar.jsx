import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend/assets';

export default function SearchBar() {
  const { search, setSearch, darkMode, showSearch, setShowSearch } =
    useContext(ShopContext);

  return showSearch ? (
    <div
      className={`text-center border-t ${darkMode ? 'bg-black' : 'bg-gray-50'}`}
    >
      <div className="inline-flex items-center justify-center w-3/4 px-5 py-2 mx-3 my-5 border border-gray-400 rounded-full sm:w-1/2">
        <input
          value={search}
          type="text"
          placeholder="Search"
          className="flex-1 text-sm outline-none bg-inherit"
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={assets.search_icon} alt="" className="w-4" />
      </div>
      <img
        src={assets.cross_icon}
        alt=""
        className="inline w-3 cursor-pointer"
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
}
