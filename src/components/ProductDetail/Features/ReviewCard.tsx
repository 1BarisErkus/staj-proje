import { FC } from "react";
import { Rating } from "@smastrom/react-rating";
import {
  ReviewCardContainer,
  ReviewHeader,
  StarRating,
  ReviewerName,
  ReviewDate,
  SellerInfo,
  PurchaseStatus,
  ReviewText,
  HelpfulSection,
  HelpfulText,
  ThumbsUpIcon,
  HelpfulCount,
} from "@/styles/ProductDetail/Features/ReviewCard";
import { AiOutlineCheck } from "react-icons/ai";
import { FaThumbsUp } from "react-icons/fa";

type ReviewCardProps = {
  userName: string;
  comment: string;
  rating: number;
  date: string;
  seller: string;
  helpfulCount: number;
};

const ReviewCard: FC<ReviewCardProps> = ({
  userName,
  comment,
  rating,
  date,
  seller,
  helpfulCount,
}) => {
  const displayDate = new Date(date).toLocaleDateString();

  return (
    <ReviewCardContainer>
      <ReviewHeader>
        <StarRating>
          <Rating value={rating} style={{ maxWidth: "70px" }} readOnly />
        </StarRating>
        <ReviewerName>{userName}</ReviewerName>
        <ReviewDate>{displayDate}</ReviewDate>
        <SellerInfo>{seller}</SellerInfo>
        <PurchaseStatus>
          <AiOutlineCheck color="green" /> Satın Alındı
        </PurchaseStatus>
      </ReviewHeader>
      <ReviewText>{comment}</ReviewText>
      <HelpfulSection>
        <HelpfulText>Bu yorumu faydalı buldunuz mu?</HelpfulText>
        <ThumbsUpIcon>
          <FaThumbsUp />
        </ThumbsUpIcon>
        <HelpfulCount>{helpfulCount}</HelpfulCount>
      </HelpfulSection>
    </ReviewCardContainer>
  );
};

export default ReviewCard;
