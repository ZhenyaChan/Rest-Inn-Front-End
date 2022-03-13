import React, {useState, useEffect} from 'react';
import BestSellerItem from './BestsellerItem.js';

const BestsellerList = () => {
  const[bestsellers, setBestsellers] = useState([{
    _id: 0,
    propertyTitle: "",
    image: null
  }]);

  useEffect(() => {
    const URL = "http://localhost:5000/properties?bestSeller=true";
    

    fetch(URL)
    .then(response => response.json())
    .then(json => {
      setBestsellers(json.data);
    })
    .catch(err => console.log(err));

  }, []);

  return (
    <section id="section-bestseller">
      <div className="container">

        <h1>Bestsellers</h1>
        <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
          {bestsellers.map(bestseller => (<BestSellerItem key={bestseller._id} id={bestseller._id} propertyTitle={bestseller.propertyTitle} image={bestseller.propertyPhoto}/>))}
        </div>
      </div>
    </section>
  );
};

export default BestsellerList;