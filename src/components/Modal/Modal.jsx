import { StyledBackdrop } from './Modal.styled';
import Cross from '/src/images/Cross';
import { useEffect } from 'react'

const Modal = ({ onClose, car }) => {
    
    const {
    id,
    make,
    model,
    year,
    address,
    accessories,
    functionalities,
    rentalCompany,
    rentalPrice,
    img,
    type,
    mileage,
    engineSize,
    fuelConsumption,
    description,
    rentalConditions,
    } = car;
    
  const addressParts = address.split(",");
  const city = addressParts[1];
  const country = addressParts[2];
    
    useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClick = (evt) => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  const handleClose = () => {
    onClose();
  };
    

  return (
    <StyledBackdrop onClick={handleClick}>
      <div>
        <button onClick={handleClose}>
          <Cross/>
        </button>
        <div >
          <img src={img} alt={model} />
          <p>
            {`${make} `}
            <span>{model}</span>
            {`, ${year}`}
          </p>
          <div>
            <p>{city}</p>
            <p>{country}</p>
            <p>{id}</p>
            <p>{year}</p>
            <p>{type}</p>
          </div>
          <div>
            <p>
              Fuel Consumption: {fuelConsumption}
            </p>
            <p>
              Engine Size: {engineSize}
              {rentalCompany}
            </p>
          </div>
          <p>{description}</p>
          <p>Accessories and functionalities:</p>
          <div>
            {accessories.map((item, i) => {
              return (
                <span key={i}>
                  {item}
                </span>
              );
            })}
          </div>
          <div>
            {functionalities.map((item, i) => {
              return (
                <span key={i}>
                  {item}
                </span>
              );
            })}
          </div>
          <h4>Rental Conditions: </h4>
          <div>
            <span>
              {rentalConditions[0].split(":")[0]}:{" "}
              <span>{rentalConditions[0].split(":")[1]}</span>
            </span>
            <span>{rentalConditions[1]}</span>
          </div>
          <div>
            <span>{rentalConditions[2]}</span>
            <span className={css.conditionsItem}>
              Mileage:{" "}
              <span>
                {new Intl.NumberFormat("en-US").format(mileage)}
              </span>
            </span>
            <span>
              Price: <span>{rentalPrice}$</span>
            </span>
          </div>

          <a href="tel:+380730000000">
            Rental car
          </a>
        </div>
      </div>
    </StyledBackdrop>
  )
}

export default Modal
