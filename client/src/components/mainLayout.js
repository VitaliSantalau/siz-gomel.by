import React from 'react';

import "../css/layout.css";

import Header from "./header";
import Footer from "./footer";

function MainLayout({ children }) {
  return (
    <div className="root">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;