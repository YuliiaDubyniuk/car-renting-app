import { useState } from "react";
import { DropdownButton, DropdownWrapper, Option, OptionsContainer} from "./Dropdown.styled";
import  ArrowUp  from "/src/images/ArrowUp";
import ArrowDown from "/src/images/ArrowDown";

const Dropdown = ({ options, onSelect, placeholder, width }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

    const handleToggle = () => {
    setIsOpen(!isOpen);
  };

    const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
      <DropdownWrapper width={width}>
          {selectedOption || placeholder }
      <DropdownButton onClick={(e) => { e.stopPropagation(); handleToggle(); }}>
        {isOpen ? <ArrowUp/> : <ArrowDown/>}
      </DropdownButton>
      {isOpen && (
        <OptionsContainer>
          {options.map((option, index) => (
            <Option key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </Option>
          ))}
        </OptionsContainer>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;