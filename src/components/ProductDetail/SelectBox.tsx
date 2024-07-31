import React, { useState } from "react";
import {
  ArrowIcon,
  ColorCircle,
  DropdownContainer,
  DropdownHeader,
  DropdownHeaderContent,
  DropdownListContainer,
  DropdownTitle,
  DropdownTitleWrapper,
  ListItem,
} from "@/styles/ProductDetail/SelectBox";
import { FaAngleDown } from "react-icons/fa";

interface ColorOptions {
  label: string;
  color: string;
}

interface Configuration {
  title: string;
  options: ColorOptions[] | string[];
}

interface SelectBoxProps {
  title: string;
  configuration: Configuration;
}

const SelectBox: React.FC<SelectBoxProps> = ({ title, configuration }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ColorOptions | string>(
    configuration.options[0]
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item: ColorOptions | string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggleDropdown}>
        <DropdownTitleWrapper>
          <DropdownTitle>{title}</DropdownTitle>
          <ArrowIcon $isopen={isOpen}>
            <FaAngleDown />
          </ArrowIcon>
        </DropdownTitleWrapper>
        <DropdownHeaderContent>
          {typeof selectedItem !== "string" && selectedItem.color && (
            <ColorCircle color={selectedItem.color} />
          )}
          {typeof selectedItem !== "string" ? selectedItem.label : selectedItem}
        </DropdownHeaderContent>
      </DropdownHeader>
      {isOpen && (
        <DropdownListContainer>
          <ul>
            {configuration.options.map((item) => (
              <ListItem
                key={typeof item === "string" ? item : item.label}
                selected={selectedItem === item}
                onClick={() => handleSelect(item)}
              >
                {typeof selectedItem !== "string" && selectedItem.color && (
                  <ColorCircle
                    color={typeof item === "string" ? "" : item.color}
                  />
                )}

                {typeof item === "string" ? item : item.label}
              </ListItem>
            ))}
          </ul>
        </DropdownListContainer>
      )}
    </DropdownContainer>
  );
};

export default SelectBox;
