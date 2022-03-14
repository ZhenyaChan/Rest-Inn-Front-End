import React from 'react';
import { Link } from 'react-router-dom';

const PropertyTypeItem = (props) => {
  return (
    <div className="property-type-card">
      <Link to = {`/properties/${'propertyType'}/${props.title}`}>
        <img src={props.image} alt="propertyTypePic" />
      </Link>

      <div className="propertyTypeContent">
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default PropertyTypeItem;