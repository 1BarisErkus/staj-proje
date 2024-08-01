import React, { useState } from "react";
import RatingCardComponent from "./RatingCard";
import DropdownComponent from "./DropDown";
import {
  Conainer,
  TopContainer,
} from "@/styles/ProductDetail/Features/Reviews";
import ReviewCard from "./ReviewCard";

interface HomePageProps {
  reviews: {
    id: string;
    userName: string;
    comment: string;
    rating: number;
    date: string;
    helpfulCount: number;
  }[];
  seller: string;
  productId: string;
}

const options = [
  "Puan Çoktan Aza",
  "Puan Azdan Çoka",
  "Eskiden Yeniye",
  "Yeniden Eskiye",
];

const HomePage: React.FC<HomePageProps> = ({ reviews, seller, productId }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const sortedReviews = reviews.sort((a, b) => {
    if (selectedOption === "Puan Çoktan Aza") {
      return b.rating - a.rating;
    } else if (selectedOption === "Puan Azdan Çoka") {
      return a.rating - b.rating;
    } else if (selectedOption === "Eskiden Yeniye") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  return (
    <Conainer>
      <TopContainer>
        <RatingCardComponent productId={productId} />
        <DropdownComponent
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          options={options}
        />
      </TopContainer>
      {sortedReviews.map((review, index) => (
        <ReviewCard key={index} {...review} seller={seller} />
      ))}
    </Conainer>
  );
};

export default HomePage;
