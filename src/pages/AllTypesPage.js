import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyTypeList from '../components/PropertyTypeList';

const AllTypesPage = () => {
  return (
    <div className="grid grid-row-3" id="main-container">
      <Header />
      <main>
        <PropertyTypeList/>
      </main>
      <Footer />
    </div>
  );
};

export default AllTypesPage;