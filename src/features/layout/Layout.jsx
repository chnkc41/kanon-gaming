import React from 'react';  
import NavigationTop from './NavigationTop';
import Sidebar from 'features/layout/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout__content">
        <NavigationTop />
        <main className="main">
          <div className="main__content">
            {/* Content */} 
            <Outlet /> 
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
