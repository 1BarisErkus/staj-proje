import { ChangeEvent, FC, useState } from "react";
import { FeaturesProps } from "@/lib/types";
import { menuItems } from "@/lib/menuItems";
import {
  Button,
  CheckBoxContainer,
  Description,
  Dropdown,
  DropdownOption,
  Error,
  Input,
  InputContainer,
  InputSection,
  InputSectionContent,
} from "@/styles/Admin";

const colorOptions = [
  {
    label: "Mavi",
    color: "#1e88e5",
  },
  {
    label: "Beyaz",
    color: "#fff",
  },
  {
    label: "Kırmızı",
    color: "#f44336",
  },
  {
    label: "Siyah",
    color: "#000",
  },
  {
    label: "Yeşil",
    color: "#4caf50",
  },
  {
    label: "Turuncu",
    color: "#ff9800",
  },
  {
    label: "Mor",
    color: "#9c27b0",
  },
  {
    label: "Pembe",
    color: "#e91e63",
  },
];

const BasicFeatures: FC<FeaturesProps> = ({ register, setValue, errors }) => {
  const [selectedColors, setSelectedColors] = useState<
    { label: string; color: string }[]
  >([]);
  const [subCategoryAppear, setSubCategoryAppear] = useState(false);
  const [subCategories, setSubCategories] = useState<{ title: string }[]>([]);
  const [imageCount, setImageCount] = useState(1);

  const fillSubCategories = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    setValue("category", selectedCategory);

    const subCategories = menuItems.find(
      (item) => item.title === selectedCategory
    )?.subItems;

    if (!subCategories) {
      setSubCategories([]);
      setSubCategoryAppear(false);
      setValue("subCategory", "");
    } else {
      setSubCategories(subCategories);
      setSubCategoryAppear(true);
    }
  };

  const handleCheckboxChange = (option: { label: string; color: string }) => {
    const isSelected = selectedColors.some(
      (color) => color.label === option.label
    );
    let updatedColors = [...selectedColors];

    if (isSelected) {
      updatedColors = updatedColors.filter(
        (color) => color.label !== option.label
      );
    } else {
      updatedColors.push(option);
    }

    setSelectedColors(updatedColors);
    setValue("configuration", [
      {
        title: "Renk",
        options: updatedColors,
      },
    ]);
  };

  return (
    <InputSection>
      <h2>Temel Özellikler</h2>
      <InputSectionContent>
        <InputContainer>
          <Input
            id="name"
            type="text"
            placeholder="Ad"
            width={300}
            {...register("name")}
          />
          {errors.name && <Error>{errors.name.message}</Error>}
        </InputContainer>
        <InputContainer>
          <Input
            type="number"
            placeholder="Fiyat"
            width={150}
            {...register("price", {
              valueAsNumber: true,
            })}
          />
          {errors.price && <Error>{errors.price.message}</Error>}
        </InputContainer>

        <InputContainer>
          <Input
            type="text"
            placeholder="Marka"
            width={200}
            {...register("brandCode")}
          />
          {errors.brandCode && <Error>{errors.brandCode.message}</Error>}
        </InputContainer>
      </InputSectionContent>

      <InputSectionContent>
        <InputContainer>
          <Dropdown
            {...register("category")}
            onChange={fillSubCategories}
            defaultValue="Cep Telefonu-Aksesuar"
          >
            {menuItems.map((item, index) => (
              <DropdownOption key={index} value={item.title}>
                {item.title}
              </DropdownOption>
            ))}
          </Dropdown>
          {errors.category && <Error>{errors.category.message}</Error>}
        </InputContainer>
        {subCategoryAppear && subCategories.length > 0 && (
          <InputContainer>
            <Dropdown {...register("subCategory")}>
              {subCategories.map((item, index) => (
                <DropdownOption key={index} value={item.title}>
                  {item.title}
                </DropdownOption>
              ))}
            </Dropdown>
          </InputContainer>
        )}
      </InputSectionContent>

      <InputSectionContent>
        <InputContainer style={{ width: "100%" }}>
          <Description placeholder="Açıklama" {...register("description")} />
          {errors.description && <Error>{errors.description.message}</Error>}
        </InputContainer>
      </InputSectionContent>

      <InputSectionContent>
        {imageCount > 0 &&
          Array.from({ length: imageCount }).map((_, index) => (
            <InputContainer key={index}>
              <Input
                type="text"
                placeholder="URL"
                width={200}
                {...register(`images.${index}`)}
              />
              {errors.images && <Error>{errors.images[index]?.message}</Error>}
            </InputContainer>
          ))}
        <Button
          type="button"
          onClick={() => imageCount > 1 && setImageCount(imageCount - 1)}
        >
          -1 Resim
        </Button>
        <Button
          type="button"
          onClick={() => imageCount < 3 && setImageCount(imageCount + 1)}
        >
          +1 Resim
        </Button>
      </InputSectionContent>

      <InputSectionContent>
        {colorOptions.map((option, index) => (
          <InputContainer key={index}>
            <CheckBoxContainer>
              <Input
                id={index.toString()}
                type="checkbox"
                width={20}
                value={JSON.stringify(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              <label htmlFor={index.toString()}>{option.label}</label>
            </CheckBoxContainer>
          </InputContainer>
        ))}
        {errors.configuration && (
          <Error>
            {errors.configuration[0]?.options?.message ||
              "Lütfen en az bir renk seçin."}
          </Error>
        )}
      </InputSectionContent>
    </InputSection>
  );
};

export default BasicFeatures;
