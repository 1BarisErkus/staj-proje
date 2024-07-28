import { StyledCol, StyledRow } from "@/styles/HomePage/Campaigns";
import Section from "../Section";
import Image from "next/image";

const Campaigns = () => {
  return (
    <Section title="Campaigns">
      <StyledRow>
        <StyledCol size={8}>
          <Image
            src="/images/campaigns/36aytaksit-kampanyalar-yatay-webx.webp"
            alt="36 Ay Taksit"
            width={780}
            height={280}
            priority
            layout="responsive"
          />
          <Image
            src="/images/campaigns/pac-jbl--yatay-web.webp"
            alt="36 Ay Taksit"
            width={780}
            height={280}
            priority
            layout="responsive"
          />
        </StyledCol>
        <StyledCol size={4}>
          <Image
            src="/images/campaigns/hk30k-Kampanyalar-Dikey.webp"
            alt="36 Ay Taksit"
            width={380}
            height={580}
            priority
            layout="responsive"
          />
        </StyledCol>
      </StyledRow>
    </Section>
  );
};

export default Campaigns;
