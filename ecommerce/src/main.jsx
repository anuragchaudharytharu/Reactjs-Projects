import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';

import { StrictMode } from 'react';
import { ShopContextProvider } from './context/ShopContext';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextProvider>
      <App />
      <ToastContainer />
    </ShopContextProvider>
  </StrictMode>
);
