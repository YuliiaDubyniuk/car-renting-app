// import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectIsLoading } from '/src/redux/cars/selectors';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import Card from './Card/Card';
import { addPage } from '/src/redux/cars/carsReducer';
import { StyledBtn, StyledList } from './CarsList.styled';
import { fetchAllCars } from '/src/redux/cars/operations';
import { selectPage } from '/src/redux/cars/selectors';

const CardsList = () => {  
  const isLoading = useSelector(selectIsLoading);
  const cars = useSelector(selectCars);  
  const page = useSelector(selectPage);
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const keys = searchParams.keys();
    const hasParams = !keys.next().done;

    if (hasParams) {
      dispatch(fetchAllCars({ page, searchParams }));
    console.log(searchParams)
  } else {
    dispatch(fetchAllCars());
  }
  }, [dispatch, searchParams, page]);


   const handleBtnClick = () => {
    dispatch(addPage())
  }

  return (
    <>      
        <StyledList>
          {cars &&
            cars.map((car) => {
              return <Card key={car.id} car={car} />;
            })}
        </StyledList>
      {!isLoading && <StyledBtn type="button"
        onClick={handleBtnClick}
      >
        Load more
      </StyledBtn>}      
    </>
  );
};

export default CardsList
