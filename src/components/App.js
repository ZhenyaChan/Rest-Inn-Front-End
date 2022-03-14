import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import PropertiesPage from '../pages/PropertiesPage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import PropertyDescriptionPage from '../pages/PropertyDescriptionPage';
import BestSellerPage from '../pages/BestSellerPage';
import TypesPage from '../pages/TypesPage';
import AllTypesPage from '../pages/AllTypesPage';
import '../assets/css/App.css';
import '../assets/css/utilities.css';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="properties" element={<PropertiesPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegistrationPage />} />
        <Route path="/properties/:id" element={<PropertyDescriptionPage />} />
        <Route path="properties/:key/:pType" element={<TypesPage />} />
        <Route path="properties/:key/:value" element={<BestSellerPage />} />
        <Route path="properties/types" element={<AllTypesPage />} />  
      </Routes>
    </BrowserRouter>
  );
};

export default App;
