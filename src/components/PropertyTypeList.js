import React, {useState, useEffect} from 'react';
import PropertyTypeItem from './PropertyTypeItem.js';

const PropertyTypeList = () => {

  const[propertyTypes, setPropertyTypes] = useState([{
    typeID: 0,
    title: "",
    image: null
  }]);

  useEffect(() => {
    const URL = "http://localhost:5000/properties/types";
    

    fetch(URL)
    .then(response => response.json())
    .then(json => {
      setPropertyTypes(json.data);
    })
    .catch(err => console.log(err));

  }, []);


  return (
    <section id="section-property-type">
      <div className="container">

        <h1>Property Types</h1>
        <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
          {propertyTypes.map(propertyType => (<PropertyTypeItem key={propertyType.typeID} id={propertyType.typeID} title={propertyType.type} image={propertyType.image} />))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypeList;