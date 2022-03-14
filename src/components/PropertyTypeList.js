import React, {useState, useEffect} from 'react';
import PropertyTypeItem from './PropertyTypeItem.js';
import { Link } from 'react-router-dom';

const PropertyTypeList = () => {

  const[propertyTypes, setPropertyTypes] = useState([{
    typeID: 0,
    title: "",
    image: null
  }]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/properties/types`)
    .then(response => response.json())
    .then(json => {
      setPropertyTypes(json.data);
    })
    .catch(err => console.log(err));
  }, []);


  return (
    <section id="section-property-type">
      <div className="container">
        <Link to={`/properties/types`}>
          <h1>Property Types</h1>
        </Link>
        <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
          {propertyTypes.map(propertyType => (<PropertyTypeItem key={propertyType.typeID} id={propertyType.typeID} title={propertyType.type} image={propertyType.image} />))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypeList;