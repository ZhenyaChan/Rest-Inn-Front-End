import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TypesPage = () => {
    const [type, setType] = useState([{
        _id: "",
        propertyTitle: "",
        rentalPrice: 0,
        description: "",
        propertyType: "",
        houseRules: [],
        amentities: [],
        location: "",
        bestSeller: false,
        photo: "",
    }]);

    const { key, pType } = useParams([]);

    console.log(key, pType);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND}/properties?${key}=${pType}`)
        .then(response => response.json())
        .then(json => {
            setType(json.data);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div className="grid grid-row-3" id="main-container">
            <Header />
            <main>
                {type.map((item) => {
                    return (
                        <section id="section-property-description">
                            <Link to={`/properties/${item._id}`} className='RestList-singleContainer' key={item._id} >
                                <h1>{item.propertyTitle}</h1>
                            </Link>
                            <div className="container grid grid-col-2">
                                <img src={item.propertyPhoto} alt="property" />
                                <div className="property-description-content">
                                    <h4>Price: </h4>
                                    <p>${item.rentalPrice} per night</p>
                                    <h4>Property Type: </h4>
                                    <p>{item.propertyType}</p>
                                    <h4>Location: </h4>
                                    <p>{item.location}</p>
                                    <h4>Description</h4>
                                    <p>{item.description}</p>
                                    <h4>House Rules: </h4>
                                    <p>{item.houseRules}</p>
                                    <h4>Included Amentities: </h4>
                                    <p>{item.amentities}</p>
                                </div>
                            </div>
                        </section>
                    )
                })}
            </main>
            <Footer />
        </div>
    );
}

export default TypesPage;