import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { route } from './Routes/Route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { ShopContext } from './context/ShopContext';

export default function App() {
  const router = createBrowserRouter(route);

  const { darkMode } = useContext(ShopContext);

  return (
    <div
      className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

{
  /*
  // Instead of using {createBrowserRouter, RouterProvider}, we can also use this {Routes, Route} for  for routing the pages.
  // We can use below code for this:
  
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/collection" element={<Collection />} />
  <Route path="/orders" element={<Orders />} />
  <Route path="/place-order" element={<PlaceOrder />} />
  <Route path="/login" element={<Login />} />
  <Route path="/product/:productId" element={<Product />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/cart" element={<Cart />} />
</Routes> */
}
