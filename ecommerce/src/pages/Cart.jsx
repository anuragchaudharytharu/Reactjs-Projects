import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/frontend/assets';
import CartTotal from '../components/CartTotal';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { products, darkMode, currency, cartItems, updateQuantity } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let tempData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="mb-3 text-2xl">
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div className={darkMode ? 'text-white' : 'text-gray-700'}>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={index}
              className="py-4 border-t border-b grid grid-cols-(4fr_0.5fr_0.5fr) sm:grid-cols-(4fr_2fr_0.5fr) items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img src={productData.image[0]} className="w-16 sm:w-20" />
                <div>
                  <p className="text-xs font-medium sm:text-lg">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency} {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 ">{item.size}</p>
                    <input
                      type="number"
                      min={1}
                      defaultValue={item.quantity}
                      className={`${
                        darkMode ? 'border-white text-white bg-black' : ''
                      } px-1 py-1 border max-w-10 sm:max-w-20 sm:px-2`}
                      onChange={(e) =>
                        e.target.value === '' || e.target.value === '0'
                          ? null
                          : updateQuantity(
                              item._id,
                              item.size,
                              Number(e.target.value)
                            )
                      }
                    />
                    <img
                      src={assets.bin_icon}
                      className="w-4 mr-4 cursor-pointer sm:w-5"
                      onClick={() => updateQuantity(item._id, item.size, 0)}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          {cartData.length > 0 && (
            <div className="w-full text-end">
              <button
                className={` ${
                  darkMode ? 'bg-slate-600' : 'bg-black text-white '
                } active:bg-orange-500 text-sm my-8 px-8 py-3`}
                onClick={() => navigate('/place-order')}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
