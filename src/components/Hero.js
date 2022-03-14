import React,{useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {

  const photoDelay = 2000;

  const [index, setIndex] = useState(0);
  const [feature , setFeature] = useState([{
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


  useEffect(()=>{   
    fetch(`${process.env.REACT_APP_BACKEND}/properties?bestSeller=true`)
    .then(response=>response.json())
    .then(json=>{ 
     setFeature(json.data);      
    })
    .catch(err=>console.log(err))
    }, []);

  const timeOut = useRef(null);
  
  function resetTimeout() {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }
  }
 
  useEffect(() => {
    resetTimeout();
    timeOut.current = setTimeout(() =>
        setIndex((previous) =>
          previous === feature.length - 1 ? 0 : previous + 1
        ),
      photoDelay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideShow" >
      <div className="slideShowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {feature.map((data, index) => {
          return (
            <Link to={`properties/${data._id}`}>
              <img key = {data._id} src = {data.propertyPhoto} alt='slide' className='slide' />
            </Link>
          )
        })}
      </div>
    </div>
  );
};

export default Hero;