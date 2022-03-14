import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BestsellerList from '../components/BestsellerList';

const BestSellerPage = () => {
    const [bestSellerData, setBestSeller] = useState([{
        _id: "",
        title: "",
        rentalPrice: 0,
        description: "",
        propertyType: "",
        houseRules: [],
        amenities: [],
        location: [],
        bestSeller: false,
        photo: "",
    }]);

    const { key, value } = useParams([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND}/properties?${key}=${value}`)
        .then(response => response.json())
        .then(json => {
            setBestSeller(json.data);
        })
        .catch(err => console.log(err))
    }, []);

    return (
        <div className="grid grid-row-3" id="main-container">
            <Header />
            <main>
                <BestsellerList />
            </main>
            <Footer />
        </div>
    );
}

export default BestSellerPage;