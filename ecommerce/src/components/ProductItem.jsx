import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

export default function ProductItem({ id, name, price, image }) {
  const { currency, darkMode } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className={`${darkMode ? 'text-white' : 'text-gray-700'} cursor-pointer`}
    >
      <div>
        <div className="overflow-hidden">
          <img
            src={image[0]}
            alt=""
            className="transition ease-in hover:scale-110"
          />
        </div>
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p
          className={`text-sm font-medium ${darkMode ? 'text-orange-800' : ''}`}
        >
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
}
