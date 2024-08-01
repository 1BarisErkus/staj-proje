import React, { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Container, Header, Icon, Item } from "@/styles/Category";
import { RadioButton } from "@/styles/Category/SwitchButton";

const sortOptions = [
  "En Popüler",
  "En Yeniler",
  "En Düşük Fiyat",
  "En Yüksek Fiyat",
  "En Yüksek Puan",
];

interface SortByProps {
  sortValue: string;
  dispatch: React.Dispatch<{ type: string; payload: string }>;
}

const SortBy: React.FC<SortByProps> = ({ sortValue, dispatch }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SORT_BY", payload: event.target.value });
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container>
      <Header onClick={toggleExpand}>
        Sırala
        <Icon>{isExpanded ? <FaAngleDown /> : <FaAngleRight />}</Icon>
      </Header>
      {isExpanded &&
        sortOptions.map((option) => (
          <Item $active={option === sortValue} key={option}>
            <label>
              <RadioButton
                value={option}
                checked={sortValue === option}
                onChange={handleChange}
              />
              {option}
            </label>
          </Item>
        ))}
    </Container>
  );
};

export default SortBy;
