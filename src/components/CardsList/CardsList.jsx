// import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectIsLoading } from '/src/redux/cars/selectors';
import Card from './Card/Card';
import Loader from '/src/components/Loader/Loader';
import { addPage } from '/src/redux/cars/carsReducer';
import { StyledBtn, StyledList } from './CarsList.styled';

const CardsList = () => {  
  const isLoading = useSelector(selectIsLoading);
  const cars = useSelector(selectCars);

  const dispatch = useDispatch();

  const handleBtnClick = () => {
    dispatch(addPage())
  }

  return (
    <>      
        {isLoading && <Loader />}
        <StyledList>
          {cars &&
            cars.map((car) => {
              return <Card key={car.id} car={car} />;
            })}
        </StyledList>
      {!isLoading && <StyledBtn type="button" onClick={handleBtnClick}>
        Load more
      </StyledBtn>}      
    </>
  );
};

export default CardsList
