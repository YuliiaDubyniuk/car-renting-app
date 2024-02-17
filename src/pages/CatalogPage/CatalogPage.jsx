import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import FiltersForm from '/src/components/FiltersForm/FiltersForm';
import { selectPage, selectCars } from '/src/redux/cars/selectors.js';
import { fetchAllCars } from '/src/redux/cars/operations.js';
import CardsList from '/src/components/CardsList/CardsList';


const CatalogPage = () => {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCars(page));
  }, [dispatch, page]);

  return (
    <>
      <FiltersForm /> 
      <CardsList/>
    </>
  )
}

export default CatalogPage;
