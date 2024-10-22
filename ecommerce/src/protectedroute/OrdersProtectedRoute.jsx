import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import SignIn from '../pages/SignIn';
import Orders from '../pages/Orders';

export default function OrdersProtectedRoute() {
  const { user } = useContext(ShopContext);

  return user ? <Orders /> : <SignIn />;
}
