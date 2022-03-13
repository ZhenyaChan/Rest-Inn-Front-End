import React from 'react';
import { Link } from 'react-router-dom';

const BestSellerItem = (props) => {
  return (
    <div className="property-card">
      <Link to = {`/properties/${props.id}`}>
        <img src={props.image} alt="bestseller" />
      </Link>

      <div className="propertyContent">
        <h3>{props.propertyTitle}</h3>
      </div>
    </div>
  );
};

export default BestSellerItem;