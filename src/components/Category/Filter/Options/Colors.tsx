import React, { useState } from "react";
import { Header } from "@/styles/Category";
import {
  CheckboxContainer,
  FilterOption,
  FilterSection,
  HiddenCheckbox,
  StyledCheckbox,
} from "@/styles/Category/Options";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

export const filterColors = [
  "Beyaz",
  "Siyah",
  "Pembe",
  "Gümüş",
  "Yeşil",
  "Mavi",
  "Altın",
  "Mor",
];

interface ColorsProps {
  dispatch: any;
  colors: string[];
}

const Colors: React.FC<ColorsProps> = ({ dispatch, colors }) => {
  const [isColorOpen, setIsColorOpen] = useState<boolean>(false);

  return (
    <FilterSection>
      <Header onClick={() => setIsColorOpen((prev) => !prev)}>
        Renkler {isColorOpen ? <FaAngleDown /> : <FaAngleRight />}
      </Header>
      {isColorOpen && (
        <div>
          {filterColors.map((color, index) => (
            <FilterOption
              key={index}
              onClick={() => dispatch({ type: "COLORS", payload: color })}
            >
              <CheckboxContainer>
                <HiddenCheckbox />
                <StyledCheckbox checked={colors.includes(color)} />
              </CheckboxContainer>
              {color}
            </FilterOption>
          ))}
        </div>
      )}
    </FilterSection>
  );
};

export default Colors;
