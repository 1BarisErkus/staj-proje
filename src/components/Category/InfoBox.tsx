import React, { useState } from "react";
import {
  SubCategoryList,
  SubCategoryItem,
  Icon,
} from "@/styles/Category/InfoBox";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Container, Header, Item } from "@/styles/Category";

interface SubCategory {
  name: string;
  count: number;
}

interface Category {
  name: string;
  count: number;
  subcategories?: SubCategory[];
}

const categories: Category[] = [
  {
    name: "Apple Telefonlar",
    count: 61,
    subcategories: [
      { name: "Tüm Apple Telefonlar", count: 0 },
      { name: "Android Telefonlar", count: 587 },
      { name: "Yapay Zeka (AI) Telefonlar", count: 19 },
      { name: "Aksesuarlar", count: 8434 },
      { name: "Giyilebilir Teknolojiler", count: 633 },
      { name: "Yenilenmiş Telefonlar", count: 533 },
    ],
  },
];

const InfoBox = () => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const [openSubCategories, setOpenSubCategories] = useState<string[]>([]);

  const toggleCategory = (categoryName: string) => {
    if (openCategories.includes(categoryName)) {
      setOpenCategories(openCategories.filter((name) => name !== categoryName));
    } else {
      setOpenCategories([...openCategories, categoryName]);
    }
  };

  const toggleSubCategory = (subcategoryName: string) => {
    if (openSubCategories.includes(subcategoryName)) {
      setOpenSubCategories(
        openSubCategories.filter((name) => name !== subcategoryName)
      );
    } else {
      setOpenSubCategories([...openSubCategories, subcategoryName]);
    }
  };

  return (
    <Container>
      <Header>Cep Telefonu-Aksesuar (10252 Ürün)</Header>
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
          {openCategories.includes(category.name) && category.subcategories && (
            <SubCategoryList>
              {category.subcategories.map((subcategory) => (
                <SubCategoryItem
                  key={subcategory.name}
                  onClick={() => toggleSubCategory(subcategory.name)}
                >
                  {subcategory.name} ({subcategory.count})
                  <Icon>
                    {openSubCategories.includes(subcategory.name) ? (
                      <FaAngleDown />
                    ) : (
                      <FaAngleRight />
                    )}
                  </Icon>
                </SubCategoryItem>
              ))}
            </SubCategoryList>
          )}
        </div>
      ))}
    </Container>
  );
};

export default InfoBox;
