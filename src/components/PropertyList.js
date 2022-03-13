import React, {useState, useEffect} from 'react';
import PropertyItem from './PropertyItem.js';

const PropertyList = () => {

  const[properties, setProperties] = useState([{
    _id: 0,
    propertyTitle: "",
    rentalPrice: 0,
    description: "",
    propertyType: "",
    houseRules: [],
    amentities: [],
    location: "",
    bestseller: false,
    propertyPhoto: null
  }]);

  useEffect(() => {
    const URL = "http://localhost:5000/properties";
    

    fetch(URL)
    .then(response => response.json())
    .then(json => {
      setProperties(json.data);
    })
    .catch(err => console.log(err));

  }, []);


  return (
    <section id="section-properties">
      <div className="container">

        <h1>Vacation Properties</h1>
        <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
          {properties.map(property=> (<PropertyItem key={property._id} id={property._id} propertyTitle={property.propertyTitle} propertyPhoto={property.propertyPhoto} description={property.description}/>))}
        </div>
      </div>
    </section>
  );
};

export default PropertyList;