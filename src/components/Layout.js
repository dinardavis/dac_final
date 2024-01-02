import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Home/Header';
import Footer from './Footer';

export default function Layout() {

  return (
    <div className='master-container'>
      <Header />
      <div className='main-container'>
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}