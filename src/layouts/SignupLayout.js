import React from 'react';
import Header from "../components/layout/HeaderWithout";
import SocialBar from "../components/layout/SocialBar";
import Footer from "../components/layout/Footer";

const LayoutDefault = ({ children }) => (
  <>
    <Header />
    <SocialBar />
    <main className="site-content">
      {children}
    </main>
    <Footer/>
  </>
);

export default LayoutDefault;