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

const SortBy = () => {
  const [selectedOption, setSelectedOption] = useState("En Popüler");
  const [isExpanded, setIsExpanded] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
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
          <Item $active={option === selectedOption} key={option}>
            <RadioButton
              value={option}
              checked={selectedOption === option}
              onChange={handleChange}
            />
            {option}
          </Item>
        ))}
    </Container>
  );
};

export default SortBy;
