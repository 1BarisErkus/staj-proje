import { Header } from "@/styles/Category";
import { FilterSection } from "@/styles/Category/Options";
import { filterColors } from "./Options";
import ColorOption from "../ColorOption";
import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const Colors = () => {
  const [isColorOpen, setIsColorOpen] = useState<boolean>(false);

  return (
    <FilterSection>
      <Header>
        Renkler {isColorOpen ? <FaAngleDown /> : <FaAngleRight />}
      </Header>
      {isColorOpen && (
        <div>
          {filterColors.map((color) => (
            <ColorOption key={color} color={color} selected={false} />
          ))}
        </div>
      )}
    </FilterSection>
  );
};

export default Colors;
