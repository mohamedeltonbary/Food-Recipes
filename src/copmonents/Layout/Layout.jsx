// import React from 'react'
// import Home from '../Home/Home'
// import { Outlet } from 'react-router-dom'
// import Sidebar from '../Sidebar/Sidebar'
// import Footer from './../Footer/Footer';

// const Layout = () => {
//   return (
//  <div className="flex min-h-screen">
//   <Sidebar />
//   <main className="flex-1">
//     <Outlet />
//   </main>
// </div>

//   )
// }

// export default Layout

import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <Sidebar /> {/* Sidebar ثابت */}

      {/* المحتوى الرئيسي */}
      <div className="ml-0 lg:ml-64 p-6">
        <Outlet /> {/* هنا الصفحات المختلفة زي Home و MealDetails */}
      </div>

      {/* Footer full width */}
      <Footer />
    </div>
  );
};

export default Layout;




