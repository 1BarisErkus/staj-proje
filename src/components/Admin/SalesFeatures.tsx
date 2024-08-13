import { FC, useState } from "react";
import { FeaturesProps } from "@/lib/types";
import {
  ExtraContainer,
  Input,
  InputSection,
  InputSectionContent,
  Button,
  Error,
  InputContainer,
} from "@/styles/Admin";

const SalesFeatures: FC<FeaturesProps> = ({ register, errors }) => {
  const [discountAppear, setDiscountAppear] = useState(false);
  const [installmentAppear, setInstallmentAppear] = useState(false);

  return (
    <InputSection>
      <h2>Satış Özellikleri</h2>
      <InputSectionContent>
        <InputContainer>
          <Input
            type="number"
            placeholder="Stok"
            width={100}
            {...register("stock", {
              valueAsNumber: true,
            })}
          />
          {errors.stock && <Error>{errors.stock.message}</Error>}
        </InputContainer>

        <InputContainer>
          <Input
            type="number"
            placeholder="Limit"
            width={100}
            {...register("limit", {
              valueAsNumber: true,
            })}
          />
          {errors.limit && <Error>{errors.limit.message}</Error>}
        </InputContainer>

        <InputContainer>
          <Input
            type="text"
            placeholder="Satıcı"
            width={300}
            {...register("seller")}
          />
          {errors.seller && <Error>{errors.seller.message}</Error>}
        </InputContainer>
      </InputSectionContent>

      <InputSectionContent>
        <ExtraContainer $hide={!discountAppear}>
          <InputContainer>
            <Input
              type="number"
              placeholder="Yüzde"
              width={100}
              {...register("discountPercentage", {
                valueAsNumber: true,
              })}
            />
            {errors.discountPercentage && (
              <Error>{errors.discountPercentage.message}</Error>
            )}
          </InputContainer>

          <InputContainer>
            <Input
              type="date"
              placeholder="İndirim bitiş zamanı"
              width={200}
              {...register("discountEndTime")}
            />
            {errors.discountEndTime && (
              <Error>{errors.discountEndTime.message}</Error>
            )}
          </InputContainer>
        </ExtraContainer>

        <Button
          type="button"
          onClick={() => setDiscountAppear(!discountAppear)}
        >
          {!discountAppear ? "İndirim Ekle" : "İndirim Kaldır"}
        </Button>

        <ExtraContainer $hide={!installmentAppear}>
          <InputContainer>
            <Input
              type="number"
              placeholder="Taksit Sayısı"
              width={150}
              {...register("installmentCount", {
                valueAsNumber: true,
              })}
            />
            {errors.installmentCount && (
              <Error>{errors.installmentCount.message}</Error>
            )}
          </InputContainer>

          <InputContainer>
            <Input
              type="number"
              placeholder="Taksit Fiyatı"
              width={150}
              {...register("installmentPrice", {
                valueAsNumber: true,
              })}
            />
            {errors.installmentPrice && (
              <Error>{errors.installmentPrice.message}</Error>
            )}
          </InputContainer>
        </ExtraContainer>

        <Button
          type="button"
          onClick={() => setInstallmentAppear(!installmentAppear)}
        >
          {!installmentAppear ? "Taksit Ekle" : "Taksit Kaldır"}
        </Button>
      </InputSectionContent>
    </InputSection>
  );
};

export default SalesFeatures;
