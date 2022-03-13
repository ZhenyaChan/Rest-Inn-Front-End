import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import PropertyTypeList from '../components/PropertyTypeList';
import BestsellerList from '../components/BestsellerList';

const HomePage = () => {
  return (
    <div className="grid grid-row-3" id="main-container">
      <Header />
      <main>
        <Hero />
        <PropertyTypeList />
        <BestsellerList />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;