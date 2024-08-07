import {
  ImageWrapper,
  StyledCol,
  StyledRow,
} from "@/styles/HomePage/Campaigns";
import Section from "../Section";
import Image from "next/image";

const Campaigns = () => {
  return (
    <Section title="Kampanyalar" id="campaigns">
      <StyledRow>
        <StyledCol size={8}>
          <ImageWrapper $pos="left">
            <Image
              src="/images/campaigns/36aytaksit-kampanyalar-yatay-webx.webp"
              alt="36 Ay Taksit"
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </ImageWrapper>
          <ImageWrapper $pos="left">
            <Image
              src="/images/campaigns/pac-jbl--yatay-web.webp"
              alt="PAC JBL"
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </ImageWrapper>
        </StyledCol>
        <StyledCol size={4}>
          <ImageWrapper $pos="right">
            <Image
              src="/images/campaigns/hk30k-Kampanyalar-Dikey.webp"
              alt="HK30K Kampanya"
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </ImageWrapper>
        </StyledCol>
      </StyledRow>
    </Section>
  );
};

export default Campaigns;
