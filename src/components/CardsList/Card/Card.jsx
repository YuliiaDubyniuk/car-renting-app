import UncoloredHeart from "/src/images/UncoloredHeart";
import Heart from "/src/images/Heart";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "/src/redux/favorites/selectors";
import {
  StyledBtn,
  StyledInfo,
  StyledInfoWrapper,
  StyledLi,
  StyledMoreBtn,
  StyledThumb,
  StyledTitle,
  StyledTitleWrapper,
} from "./Card.styled";
import { addCar, deleteCar } from "/src/redux/favorites/favoritesReducer";
import Modal from "/src/components/Modal/Modal";

const Card = ({ car }) => {
  const {
    id,
    make,
    model,
    year,
    address,
    accessories,
    rentalCompany,
    rentalPrice,
    img,
    type,
    mileage,
  } = car;

  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const addressParts = address.split(",");
  const city = addressParts[1];
  const country = addressParts[2];
  
  const handleFavorite = () => {
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
    dispatch(addCar(car));
  } 
    dispatch(deleteCar(car.id));
    
  }
  
  const handleClick = () => {
    setIsModalOpen(true);
  }

  return (
    <StyledLi key={id}>
      <StyledThumb>
        <img src={img} alt="car photo" />
        <StyledBtn onClick={(id) => handleFavorite(id)}>
          {isFavorite ? <Heart /> : <UncoloredHeart />}
        </StyledBtn>
      </StyledThumb>
      <StyledTitleWrapper>
        <StyledTitle>
          {make}&nbsp;<span>{model}</span>, {year}{" "}
        </StyledTitle>
        <p>{rentalPrice}</p>
      </StyledTitleWrapper>
      <StyledInfoWrapper>
        <StyledInfo>{city}</StyledInfo>
        <StyledInfo>{country}</StyledInfo>
        <StyledInfo>{rentalCompany}</StyledInfo>
        <StyledInfo>Premium</StyledInfo>
      </StyledInfoWrapper>
      <StyledInfoWrapper>
        <StyledInfo>{type}</StyledInfo>
        <StyledInfo>{model}</StyledInfo>
        <StyledInfo>{mileage}</StyledInfo>
        <StyledInfo>{accessories[0]}</StyledInfo>
      </StyledInfoWrapper>
      <StyledMoreBtn type="button" onClick={handleClick}>Learn more</StyledMoreBtn>
      {isModalOpen && <Modal onClose={handleClick} data={car} />}
    </StyledLi>
  );
};

export default Card;
