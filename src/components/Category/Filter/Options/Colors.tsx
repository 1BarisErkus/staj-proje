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

interface ColorsProps {
  dispatch: React.Dispatch<{ type: string; payload: string }>;
  colors: string[];
  colorOptions: string[];
}

const Colors: React.FC<ColorsProps> = ({ dispatch, colors, colorOptions }) => {
  const [isColorOpen, setIsColorOpen] = useState<boolean>(false);

  return (
    <FilterSection>
      <Header onClick={() => setIsColorOpen((prev) => !prev)}>
        Renkler {isColorOpen ? <FaAngleDown /> : <FaAngleRight />}
      </Header>
      {isColorOpen && (
        <div>
          {colorOptions.map((color, index) => (
            <FilterOption
              key={index}
              onClick={() => {
                dispatch({ type: "COLORS", payload: color });
              }}
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