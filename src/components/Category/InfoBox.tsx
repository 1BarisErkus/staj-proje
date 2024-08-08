import React, { FC, useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Container, Header, Item } from "@/styles/Category";

type InfoBoxProps = {
  dataLength: number;
  params: any;
  category: string;
  subCategory: string;
};

type Category = {
  name: string;
  count: number;
};

const InfoBox: FC<InfoBoxProps> = ({
  dataLength,
  params,
  category,
  subCategory,
}) => {
  const categories: Category[] = [
    {
      name: params.slug[1] ? subCategory : "Tüm Kategoriler",
      count: dataLength,
    },
  ];

  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (categoryName: string) => {
    if (openCategories.includes(categoryName)) {
      setOpenCategories(openCategories.filter((name) => name !== categoryName));
    } else {
      setOpenCategories([...openCategories, categoryName]);
    }
  };

  return (
    <Container>
      <Header>{category}</Header>
      {categories.map((category) => (
        <div key={category.name}>
          <Item $active={false} onClick={() => toggleCategory(category.name)}>
            {category.name} ({category.count})
            {openCategories.includes(category.name) ? (
              <FaAngleDown />
            ) : (
              <FaAngleRight />
            )}
          </Item>
        </div>
      ))}
    </Container>
  );
};

export default InfoBox;
