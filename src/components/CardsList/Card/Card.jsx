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
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const addressParts = address.split(",");
  const city = addressParts[1];
  const country = addressParts[2];
  const companyNameParts = rentalCompany.split(" ");
  const company = `${companyNameParts[0]} ${companyNameParts[1]}`;
  const carModel = model.split(" ").length > 2 ? `${model.split(" ")[0]} ${model.split(" ")[1]}` : model;
  
  const handleFavorite = () => {
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
    dispatch(addCar(car));
  } else {
    dispatch(deleteCar(car.id));
    }
    
    console.log(favorites);
  }
  
  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
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
          {make}&nbsp;<span>{carModel}</span>, {year}{" "}
        </StyledTitle>
        <p>{rentalPrice}</p>
      </StyledTitleWrapper>
      <StyledInfoWrapper>
        <StyledInfo>{city}</StyledInfo>
        <StyledInfo>{country}</StyledInfo>
        <StyledInfo>{company}</StyledInfo>
        <StyledInfo>Premium</StyledInfo>
      </StyledInfoWrapper>
      <StyledInfoWrapper>
        <StyledInfo>{type}</StyledInfo>
        <StyledInfo>{carModel}</StyledInfo>
        <StyledInfo>{mileage}</StyledInfo>
        <StyledInfo>{accessories[0].length > 10 ? `${accessories[0].slice(0, 12)}... `: accessories[0] }</StyledInfo>
      </StyledInfoWrapper>
      <StyledMoreBtn type="button" onClick={handleClick}>Learn more</StyledMoreBtn>
      {isModalOpen && <Modal onClose={handleClick} data={car} />}
    </StyledLi>
  );
};

export default Card;
