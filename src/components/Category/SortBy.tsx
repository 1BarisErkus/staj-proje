import React, { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Container, Header, Icon, Item } from "@/styles/Category";
import { RadioButton } from "@/styles/Category/SwitchButton";
import { Product } from "@/common/types";

const sortOptions = [
  "En Popüler",
  "En Yeniler",
  "En Düşük Fiyat",
  "En Yüksek Fiyat",
  "En Yüksek Puan",
];

const SortBy = ({ setFilteredData }: { setFilteredData: any }) => {
  const [selectedOption, setSelectedOption] = useState("En Popüler");
  const [isExpanded, setIsExpanded] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedOption(value);

    setFilteredData((prevData: Product[]) => {
      let sortedData = [...prevData];

      if (value === "En Yeniler") {
        sortedData.sort(
          (a: Product, b: Product) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      } else if (value === "En Düşük Fiyat") {
        sortedData.sort((a: Product, b: Product) => a.price - b.price);
      } else if (value === "En Yüksek Fiyat") {
        sortedData.sort((a: Product, b: Product) => b.price - a.price);
      } else if (value === "En Yüksek Puan") {
        sortedData.sort((a: Product, b: Product) => b.rating - a.rating);
      }

      return sortedData;
    });
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
