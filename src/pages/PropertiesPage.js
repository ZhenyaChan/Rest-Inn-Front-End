import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyList from '../components/PropertyList';

const PropertiesPage = () => {
  return (
    <div className="grid grid-row-3" id="main-container">
      <Header />
      <main>
        <PropertyList/>
      </main>
      <Footer />
    </div>
  );
};

export default PropertiesPage;