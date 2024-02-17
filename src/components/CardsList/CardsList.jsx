import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectIsLoading } from '/src/redux/cars/selectors';
import Card from './Card/Card';
import Loader from '/src/components/Loader/Loader';
import { addPage } from '/src/redux/cars/carsReducer';

const CardsList = ({ filteredCars }) => {  
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const handleBtnClick = () => {
    dispatch(addPage())
  }

  return (
    <>
      <div>
        <ul>
          {filteredCars &&
            filteredCars.map((car) => {
              return <Card key={car.id} car={car} />;
            })}
        </ul>
        <button type="button" onClick={handleBtnClick}>
          Load more
        </button>
      </div>
      {isLoading && <Loader />}
    </>
  );
};

export default CardsList
