import React, { Dispatch, SetStateAction, useState } from "react";
import {
  DropdownContainer,
  DropdownHeader,
  DropdownList,
  DropdownItem,
} from "@/styles/ProductDetail/Features/Reviews";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface DropdownComponentProps {
  options: string[];
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggleDropdown}>
        {selectedOption}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {options.map((option, index) => (
            <DropdownItem
              key={index}
              onClick={() => handleOptionClick(option)}
              $active={selectedOption === option}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default DropdownComponent;
