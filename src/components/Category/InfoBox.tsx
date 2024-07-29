import React, { useState } from "react";
import {
  SubCategoryList,
  SubCategoryItem,
  Icon,
} from "@/styles/Category/InfoBox";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Container, Header, Item } from "@/styles/Category";
import { Product } from "@/common/types";
import { categoryNames } from "@/lib/categoryNames";

interface SubCategory {
  name: string;
  count: number;
}

interface Category {
  name: string;
  count: number;
  subcategories?: SubCategory[];
}

const InfoBox = ({
  dataLength,
  params,
}: {
  dataLength: number;
  params: any;
}) => {
  const categories: Category[] = [
    {
      name: params.slug[1] ? categoryNames[params.slug[1]] : "Tüm Kategoriler",
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
      <Header>{categoryNames[params.slug[0]]}</Header>
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
