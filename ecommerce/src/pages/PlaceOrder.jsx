import { useContext, useState } from 'react';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/frontend/assets';
import { useNavigate } from 'react-router-dom';

export default function PlaceOrder() {
  const { darkMode } = useContext(ShopContext);
  const [method, setMethod] = useState('cod');
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [city, setCity] = useState(null);
  const [zipcode, setZipcode] = useState(null);
  const [street, setStreet] = useState(null);
  const [state, setState] = useState(null);
  const [country, setCountry] = useState(null);

  const formInputComplete =
    firstName &&
    lastName &&
    email &&
    phone &&
    city &&
    zipcode &&
    street &&
    state &&
    country;

  return (
    <div className="flex flex-col justify-between sm:flex-row gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="my-3 text-xl sm:text-2xl">
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>

        <div className={` ${darkMode ? 'text-white' : ''} flex gap-3`}>
          <input
            type="text"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
            className={`text-black border border-gray-300 rounded py-1.5 w-full px-3.5`}
          />
          <input
            type="text"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
            className="border text-black border-gray-300 rounded py-1.5 w-full px-3.5"
          />
        </div>

        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          className="border text-black border-gray-300 rounded py-1.5 w-full px-3.5"
        />

        <input
          type="text"
          placeholder="Street"
          onChange={(e) => setStreet(e.target.value)}
          className="border text-black border-gray-300 rounded py-1.5 w-full px-3.5"
        />

        <div className={` ${darkMode ? 'text-white' : ''} flex gap-3`}>
          <input
            type="text"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
            className={`text-black border border-gray-300 rounded py-1.5 w-full px-3.5`}
          />
          <input
            type="text"
            placeholder="State"
            onChange={(e) => setState(e.target.value)}
            className="border text-black border-gray-300 rounded py-1.5 w-full px-3.5"
          />
        </div>

        <div className={` ${darkMode ? 'text-white' : ''} flex gap-3`}>
          <input
            type="number"
            placeholder="Zipcode"
            onChange={(e) => setZipcode(e.target.value)}
            className={`text-black border border-gray-300 rounded py-1.5 w-full px-3.5`}
          />
          <input
            type="text"
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
            className="border text-black border-gray-300 rounded py-1.5 w-full px-3.5"
          />
        </div>

        <input
          type="number"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
          className="border text-black border-gray-300 rounded py-1.5 w-full px-3.5"
        />
      </div>

      {/* Right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'} />

          {/* payment method selection */}
          <div className="flex flex-col gap-3 lg:flex-row">
            <div
              className={` flex items-center gap-3 p-2 px-3 border cursor-pointer`}
              onClick={() => setMethod('stripe')}
            >
              <p
                className={`h-3.5 min-w-3.5 border rounded-full ${
                  method === 'stripe' ? 'bg-green-400' : ''
                } `}
              ></p>
              <img src={assets.stripe_logo} className="h-5 mx-4" />
            </div>
            <div
              className={`flex items-center gap-3 p-2 px-3 border cursor-pointer`}
              onClick={() => setMethod('razorpay')}
            >
              <p
                className={`${
                  method === 'razorpay' ? 'bg-green-400' : ''
                } h-3.5 min-w-3.5 border rounded-full`}
              ></p>
              <img src={assets.razorpay_logo} className="h-5 mx-4" />
            </div>
            <div
              className={`flex items-center gap-3 p-2 px-3 border cursor-pointer`}
              onClick={() => setMethod('cod')}
            >
              <p
                className={`${
                  method === 'cod' ? 'bg-green-400' : ''
                } h-3.5 min-w-3.5 border rounded-full`}
              ></p>
              <p
                className={`text-gray-500 text-sm font-medium mx-4 ${
                  darkMode ? 'text-white' : ''
                }`}
              >
                CASH ON DELIVERY
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mt-8 text-end">
          <button
            className={`${
              darkMode ? 'bg-slate-600' : 'bg-black text-white'
            } px-16 py-3 text-sm `}
            onClick={() => formInputComplete && navigate('/orders')}
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
}
