import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Cart from '../pages/Cart';
import Orders from '../pages/Orders';
import Product from '../pages/Product';
import Collection from '../pages/Collection';
import PlaceOrder from '../pages/PlaceOrder';
import AppLayout from '../layout/AppLayout';
import PageNotFound from '../not-found/PageNotFound';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import PlaceOrderProtectedRoute from '../protectedroute/PlaceOrderProtectedRoute';
import OrdersProtectedRoute from '../protectedroute/OrdersProtectedRoute';
import ProfileProtectedRoute from '../protectedroute/ProfileProtectedRoute';
import Profile from '../pages/Profile';

export const route = [
  {
    path: '*',
    element: <PageNotFound />,
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      //when we gave Oulet i.e other page/component path element as children to route of AppLayout object property, AppLayout.jsx rendered selected section/component is common/same in all other page/component
      //Here, NavBar is commmon in all pages as AppLayout renders only NavBar component and all other page/component is inside children property of AppLayout route object
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'collection',
        element: <Collection />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'orders',
        element: (
          <OrdersProtectedRoute>
            <Orders />
          </OrdersProtectedRoute>
        ),
      },
      {
        path: 'place-order',
        element: (
          <PlaceOrderProtectedRoute>
            <PlaceOrder />
          </PlaceOrderProtectedRoute>
        ),
      },
      {
        path: 'product/:productId',
        element: <Product />,
      },
      {
        path: 'signin',
        element: <SignIn />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'profile',
        element: (
          <ProfileProtectedRoute>
            <Profile />
          </ProfileProtectedRoute>
        ),
      },
    ],
  },
];
