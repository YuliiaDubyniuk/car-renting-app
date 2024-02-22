import { useDispatch } from "react-redux";
import {
  StyledBtn,
  StyledFilter,
  StyledFirstInput,
  StyledForm,
  StyledLabel,
  StyledName,
  StyledSecondInput,
  StyledSpan,
  StyledText,
} from "./FiltersForm.styled";
import { useEffect, useState } from "react";
import { fetchAllCars } from "/src/redux/cars/operations";
import makes from "/src/data/makes.json";
import Dropdown from "./Dropdown/Dropdown";

const prices = [];
for (let i = 30; i <= 500; i += 10) {
  prices.push(i);
}

const FiltersForm = () => {
  const [filters, setFilters] = useState({
    brand: "",
    price: "",
    minMileage: "",
    maxMileage: "",
  });

  const handleFilterSelect = (id, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [id]: value,
    }));
  };

  const handleChange = (evt) => {
    const { id, value } = evt.target;
    setFilters((filters) => ({
      ...filters,
      [id]: value.toString(),
    }));
  };

   const handleSubmit = (evt) => {
    evt.preventDefault();

    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        params.append(key, value);
      } else {
        params.delete(key);
      }
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFilter>
        <StyledName>Car brand</StyledName>
        <Dropdown
          options={makes}
          onSelect={(selectedBrand) =>
            handleFilterSelect("brand", selectedBrand)
          }
          placeholder={"Enter the text"}
          width="224px"
        />
      </StyledFilter>

      <StyledFilter>
        <StyledName>Price/1 hour</StyledName>
        <Dropdown
          options={prices}
          onSelect={(selectedPrice) =>
            handleFilterSelect("price", `To ${selectedPrice}$`)
          }
          placeholder={"To $"}
          width="125px"
        />
      </StyledFilter>

      <div>
        <StyledText>Car mileage/km</StyledText>
        <StyledLabel>
          <StyledSpan>From</StyledSpan>
          <StyledFirstInput
            id="minMileage"
            type="number"
            value={filters.minMileage}
            onChange={handleChange}
          />
        </StyledLabel>
        <StyledLabel>
          <StyledSpan>To</StyledSpan>
          <StyledSecondInput
            id="maxMileage"
            type="number"
            value={filters.maxMileage}
            onChange={handleChange}
          />
        </StyledLabel>
      </div>
      <StyledBtn type="submit">Search</StyledBtn>
    </StyledForm>
  );
};

export default FiltersForm;
