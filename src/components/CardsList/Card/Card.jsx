import UncoloredHeart from '/src/images/UncoloredHeart';
import Heart from '/src/images/Heart';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '/src/redux/favorites/selectors';


const Card = ({ car }) => {
   const {id,
    make,
    model,
    year,
    address,
    accessories,
    rentalCompany,
    rentalPrice,
    img,
    type,
    mileage, } = car;
    
    const [isFavorite, setIsFavorite] = useState(false);
    const favorites = useSelector(selectFavorites);
    
    const addressParts = address.split(',');
    const city = addressParts[1];
    const country = addressParts[2];

  
  return (
      <li>
          <div>
          <img src={img} alt="car photo" />
          <button onClick={() => setIsFavorite(!isFavorite)}>
              { isFavorite ? <Heart/> : <UncoloredHeart/>}  
              </button>
            </div>
          <div>
              <p>{make} <span>{model}</span>`, ${year}` </p>
              <p>{ rentalPrice }</p>
          </div>
          <div>
              <p>{city}</p>
              <p>{country}</p>
              <p>{rentalCompany}</p>
              <p>Premium</p>
              <p>{type}</p>
              <p>{model}</p>
              <p>{mileage}</p>
              <p>{accessories[0]}</p>
         </div>
      
    </li>
  )
}

export default Card
