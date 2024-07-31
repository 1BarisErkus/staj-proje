import React, { useState } from "react";
import { Icon } from "@/styles/Category/InfoBox";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Container, Header, Item } from "@/styles/Category";

interface SubCategory {
  name: string;
  count: number;
}

interface Category {
  name: string;
  count: number;
}

const InfoBox = ({
  dataLength,
  params,
  category,
  subCategory,
}: {
  dataLength: number;
  params: any;
  category: string;
  subCategory: string;
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
            <Icon>
              {openCategories.includes(category.name) ? (
                <FaAngleDown />
              ) : (
                <FaAngleRight />
              )}
            </Icon>
          </Item>
        </div>
      ))}
    </Container>
  );
};

export default InfoBox;
