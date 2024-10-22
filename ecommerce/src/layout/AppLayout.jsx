// this component is only used/handled inside Route.jsx component
// Route.jsx component is routing component rendered using RouterProvider inside App.jsx component. So we can say that all component inside Route.jsx component are children component of App.jsx component and that also includes AppLayout component

import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function AppLayout() {
  return (
    <div className="px-4 sm:px-[5vw] md:px=[7vw] lg:px-[9vw]">
      {/* //NavBar is same and persist in all pages that is in all children route pages/components of AppLayout route page/component */}
      <NavBar />
      {/* Outlet is all the children route pages/components of AppLayout route page/component */}
      <Outlet />
      {/* //Footer is same and persist in all pages that is in all children route pages/components of AppLayout route page/component */}
      <Footer />
    </div>
  );
}
