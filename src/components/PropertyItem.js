import React from 'react';
import { Link } from 'react-router-dom';

const PropertyItem = (props) => {
  return (
        <div className="property-card">
            <Link to = {`/properties/${props.id}`}>
                <img src={props.propertyPhoto} alt="property" />
            </Link>

            <div className="propertyContent">
                <h3>{props.propertyTitle}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default PropertyItem;