import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PropertyDescriptionPage = () => {

    const [property, setProperty] = useState({
        id: 0,
        propertyTitle: "",
        rentalPrice: 0,
        description: "",
        propertyType: "",
        houseRules: [],
        amentities: [],
        location: "",
        bestseller: false,
        propertyPhoto: null
    });

    const {id} = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND}/properties/${id}`)
        .then(response => response.json())
        .then(json => {
            setProperty(json.data);
        })
        .catch(err => console.log(err));
    }, []);


    return (
        <div className="grid grid-row-3" id="main-container">
            <Header />
            <main>
                <section id="section-property-description">
                <h1>{property.propertyTitle}</h1>
                    <div className="container grid grid-col-2">
                        <img src={property.propertyPhoto} alt="property" />
                        <div className="property-description-content">
                            <h4>Price: </h4>
                            <p>${property.rentalPrice} per night</p>
                            <h4>Property Type: </h4>
                            <p>{property.propertyType}</p>
                            <h4>Location: </h4>
                            <p>{property.location}</p>
                            <h4>Description</h4>
                            <p>{property.description}</p>
                            <h4>House Rules: </h4>
                            <p>{property.houseRules}</p>
                            <h4>Included Amentities: </h4>
                            <p>{property.amentities}</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default PropertyDescriptionPage;