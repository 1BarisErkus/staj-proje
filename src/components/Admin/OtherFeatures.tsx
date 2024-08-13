import { ChangeEvent, FC, useEffect, useState } from "react";
import { FeaturesProps } from "@/lib/types";
import {
  Button,
  ButtonContainer,
  CheckBoxContainer,
  Error,
  Input,
  InputContainer,
  InputSection,
  InputSectionContent,
} from "@/styles/Admin";

const badgeOptions = [
  { id: "installment", label: "Peşine 4 Taksit" },
  { id: "freeShippingBadge", label: "Ücretsiz Kargo" },
  { id: "credi", label: "Alışveriş Kredisi" },
];

const OtherFeatures: FC<FeaturesProps> = ({ register, setValue, errors }) => {
  const [inputCount, setInputCount] = useState(1);
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    const badgeLabel =
      badgeOptions.find((option) => option.id === id)?.label || "";

    setSelectedBadges((prevBadges) =>
      checked
        ? [...prevBadges, badgeLabel]
        : prevBadges.filter((badge) => badge !== badgeLabel)
    );
  };

  useEffect(() => {
    setValue("badges", selectedBadges);
  }, [selectedBadges, setValue]);

  return (
    <InputSection>
      <h2>Diğer Özellikler</h2>
      <InputSectionContent>
        <CheckBoxContainer>
          <Input
            id="creditCard"
            type="checkbox"
            width={20}
            {...register("creditCard")}
          />
          <label htmlFor="creditCard">Kredi Kartı</label>
        </CheckBoxContainer>
        <CheckBoxContainer>
          <Input
            id="fibabanka"
            type="checkbox"
            width={20}
            {...register("fibabanka")}
          />
          <label htmlFor="fibabanka">Fibabanka</label>
        </CheckBoxContainer>
        <CheckBoxContainer>
          <Input
            id="freeShipping"
            type="checkbox"
            width={20}
            {...register("freeShipping")}
          />
          <label htmlFor="freeShipping">Ücretsiz Kargo</label>
        </CheckBoxContainer>
        <CheckBoxContainer>
          <Input
            id="guarantee"
            type="checkbox"
            width={20}
            {...register("guarantee")}
          />
          <label htmlFor="guarantee">Garanti</label>
        </CheckBoxContainer>
        <CheckBoxContainer>
          <Input
            id="isContract"
            type="checkbox"
            width={20}
            {...register("isContract")}
          />
          <label htmlFor="isContract">Kontrat</label>
        </CheckBoxContainer>
        <CheckBoxContainer>
          <Input
            id="isSpecialForYou"
            type="checkbox"
            width={20}
            {...register("isSpecialForYou")}
          />
          <label htmlFor="isSpecialForYou">Sana Özel</label>
        </CheckBoxContainer>
        <CheckBoxContainer>
          <Input
            id="isBestOffer"
            type="checkbox"
            width={20}
            {...register("isBestOffer")}
          />
          <label htmlFor="isBestOffer">En İyi Teklif</label>
        </CheckBoxContainer>
        <CheckBoxContainer>
          <Input
            id="isBestSeller"
            type="checkbox"
            width={20}
            {...register("isBestSeller")}
          />
          <label htmlFor="isBestSeller">En İyi Satıcı</label>
        </CheckBoxContainer>
      </InputSectionContent>

      <InputSectionContent>
        <h3>Etiketler:</h3>
        {badgeOptions.map((option) => (
          <CheckBoxContainer key={option.id}>
            <Input
              id={option.id}
              type="checkbox"
              width={20}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </CheckBoxContainer>
        ))}
      </InputSectionContent>

      <h4>Ürün Özellikleri:</h4>
      <ButtonContainer>
        <Button
          type="button"
          onClick={() => inputCount > 1 && setInputCount((prev) => prev - 1)}
        >
          -1 Özellik
        </Button>
        <Button type="button" onClick={() => setInputCount((prev) => prev + 1)}>
          +1 Özellik
        </Button>
      </ButtonContainer>
      {Array.from({ length: inputCount }).map((_, index) => (
        <InputSectionContent key={index} style={{ justifyContent: "center" }}>
          <InputContainer>
            <Input
              type="text"
              placeholder="Özellik Adı"
              width={200}
              {...register(`features.${index}.name` as const, {
                required: true,
              })}
            />
            {errors.features && (
              <Error>{errors.features[index]?.name?.message}</Error>
            )}
          </InputContainer>

          <InputContainer>
            <Input
              type="text"
              placeholder="Özellik Değeri"
              width={200}
              {...register(`features.${index}.value` as const, {
                required: true,
              })}
            />
            {errors.features && (
              <Error>{errors.features[index]?.value?.message}</Error>
            )}
          </InputContainer>
        </InputSectionContent>
      ))}
    </InputSection>
  );
};

export default OtherFeatures;
