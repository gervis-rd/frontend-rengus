import React from 'react';
import Header from './Header';
import Footer from '../sections/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full max-w-[100vw]">
      <Header />
      <main className="flex-grow w-full max-w-[100vw] overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

