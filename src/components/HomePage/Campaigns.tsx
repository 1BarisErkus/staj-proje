import Image from "next/image";
import { Row } from "@/styles/GlobalVariables";
import { CapmaignsImageWrapper, StyledCol } from "@/styles/HomePage/Campaigns";
import Section from "../Section";

const Campaigns = () => {
  return (
    <Section title="Kampanyalar" id="campaigns">
      <Row>
        <StyledCol size={8}>
          <CapmaignsImageWrapper $pos="left">
            <Image
              src="/images/campaigns/36aytaksit-kampanyalar-yatay-webx.webp"
              alt="36 Ay Taksit"
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </CapmaignsImageWrapper>

          <CapmaignsImageWrapper $pos="left">
            <Image
              src="/images/campaigns/pac-jbl--yatay-web.webp"
              alt="PAC JBL"
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </CapmaignsImageWrapper>
        </StyledCol>

        <StyledCol size={4}>
          <CapmaignsImageWrapper $pos="right">
            <Image
              src="/images/campaigns/hk30k-Kampanyalar-Dikey.webp"
              alt="HK30K Kampanya"
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </CapmaignsImageWrapper>
        </StyledCol>
      </Row>
    </Section>
  );
};

export default Campaigns;
