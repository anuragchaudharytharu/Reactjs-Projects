import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Profile from '../pages/Profile';

export default function PlaceOrderProtectedRoute() {
  const { user } = useContext(ShopContext);

  return user && <Profile />;
}
