import { useSelector } from "react-redux";
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
import { selectCars } from "/src/redux/cars/selectors";

const prices = [];
for (let i = 30; i <= 200; i += 10) {
  prices.push(i);
}

const FiltersForm = () => {

  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedMinMileage, setSelectedMinMileage] = useState(null);
  const [selectedMaxMileage, setSelectedMaxMileage] = useState(null);

  const [filteredCars, setFilteredCars] = useState(null);

  const cars = useSelector(selectCars);

  useEffect(() => {    
    const filtered = cars.filter(car => {
      return (
        (!selectedMake || car.make === selectedMake) &&
        (!selectedPrice || car.price <= selectedPrice) &&
        (!selectedMinMileage || car.mileage >= selectedMinMileage) &&
        (!selectedMaxMileage || car.mileage <= selectedMaxMileage)
      );
    });
    setFilteredCars(filtered);
  }, [cars, selectedMake, selectedPrice, selectedMinMileage, selectedMaxMileage]);

  return (
    <StyledForm>
      <StyledFilter>
        <StyledName>Car brand</StyledName>
        <StyledSelect id="brand" defaultValue="default" onChange={(e) => setSelectedMake(e.target.value)}>
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
          id="price"
          defaultValue="default"
          onChange={(e) => setSelectedPrice(e.target.value)}
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
          <StyledFirstInput type="number" onChange={(e) => setSelectedMinMileage(e.target.value)}/>
        </StyledLabel>
        <StyledLabel>
          <StyledSpan>To</StyledSpan>
          <StyledSecondInput type="number" onChange={(e) => setSelectedMaxMileage(e.target.value)}/>
        </StyledLabel>
      </div>
      <StyledBtn type="submit">Search</StyledBtn>
    </StyledForm>
  );
};

export default FiltersForm;
