import { useDispatch, useSelector } from "react-redux";
import {
  StyledBtn,
  StyledFilter,
  StyledFirstInput,
  StyledForm,
  StyledLabel,
  StyledName,
  StyledSecondInput,
  StyledSelect,
  StyledSpan,
  StyledText,
} from "./FiltersForm.styled";
import makes from "/src/data/makes.json";
import { useEffect, useState } from "react";
import { fetchAllCars } from "/src/redux/cars/operations";


const prices = [];
for (let i = 30; i <= 200; i += 10) {
  prices.push(i);
}

const FiltersForm = () => {
 
  const [filters, setFilters] = useState({
    brand: "",
    rentalPrice: "",
    // minMileage: "",
    // maxMileage: "",
  });

  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { id, value } = evt.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [id]: value
    }));
  };

  useEffect(() => {
    const params = new URLSearchParams()
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        params.append(key, value);
      } else {
        params.delete(key);
      }
    });
    dispatch(fetchAllCars(params.toString()));
  }, [dispatch, filters]);


  return (
    <StyledForm>
      <StyledFilter>
        <StyledName>Car brand</StyledName>
        <StyledSelect id="brand" value={filters.brand} onChange={handleChange}>
          <option disabled value="default">
            Enter the text
          </option>
          {makes.map((brandName) => (
            <option key={brandName} value={brandName}>
              {brandName}
            </option>
          ))}
        </StyledSelect>
      </StyledFilter>

      <StyledFilter>
        <StyledName>Price/1 hour</StyledName>
        <StyledSelect
          id="rentalPrice"
          value={filters.rentalPrice}
          onChange={handleChange}
        >
          <option disabled value="default">
            To $
          </option>
          {prices.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </StyledSelect>
      </StyledFilter>

      <div>
        <StyledText>Car mileage/km</StyledText>
        <StyledLabel>
          <StyledSpan>From</StyledSpan>
          <StyledFirstInput id="minMileage" type="number" value={filters.minMileage } onChange={handleChange}/>
        </StyledLabel>
        <StyledLabel>
          <StyledSpan>To</StyledSpan>
          <StyledSecondInput id="maxMileage" type="number" value={filters.maxMileage } onChange={handleChange}/>
        </StyledLabel>
      </div>
      <StyledBtn type="submit">Search</StyledBtn>
    </StyledForm>
  );
};

export default FiltersForm;
