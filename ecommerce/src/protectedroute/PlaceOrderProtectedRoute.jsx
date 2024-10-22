import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import PlaceOrder from '../pages/PlaceOrder';
import SignIn from '../pages/SignIn';

export default function PlaceOrderProtectedRoute() {
  const { user } = useContext(ShopContext);

  return user ? <PlaceOrder /> : <SignIn />;
}
