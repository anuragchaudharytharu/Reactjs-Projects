import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

export default function Orders() {
  const { products, currency, darkMode } = useContext(ShopContext);

  return (
    <div className="pt-16 border-t">
      <div className="text-2xl">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className={`${
              darkMode ? 'text-white' : ''
            } py-4 border-t text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4`}
          >
            <div className={`flex items-start text-sm gap-6`}>
              <img src={item.image[0]} className="w-16 sm:w-20" />

              <div>
                <p className="font-medium sm:text-base">{item.name}</p>
                <div
                  className={`flex items-center gap-3 mt-2 text-base text-gray-700`}
                >
                  <p className="text-lg">
                    {currency} {item.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>

                <p>
                  Date: <span className="text-gray-400">25 July, 2024</span>{' '}
                </p>
              </div>
            </div>

            <div className="flex justify-between md:w-1/2">
              <div className="flex items-center gap-2">
                <p className="h-2 bg-green-500 rounded-full min-w-2"></p>
                <p className="text-sm md:text-base">Ready to ship</p>
              </div>

              <button className="px-4 py-2 text-sm font-medium border rounded-sm">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
