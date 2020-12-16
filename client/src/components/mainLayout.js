import React from 'react';

import "../css/layout.css";

import Header from "./header";
import Footer from "./footer";
import HeaderMobile from './headerMobile';

function MainLayout({ children }) {
  return (
    <div className="root">
      <Header />
      <HeaderMobile />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;