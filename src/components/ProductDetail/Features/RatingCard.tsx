import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import {
  RatingCard,
  RatingTitle,
  RatingCount,
  WriteReviewButton,
  Note,
} from "@/styles/ProductDetail/Features/Reviews";
import Modal from "./Modal";

const RatingCardComponent = ({ productId }: { productId: string }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <RatingCard>
        <RatingTitle>Ürün Değerlendirmeleri</RatingTitle>
        <RatingCount>54 kere puanlandı</RatingCount>
        <Rating value={4} style={{ maxWidth: "100px" }} />
        <WriteReviewButton onClick={openModal}>Yorum Yaz</WriteReviewButton>
        <Note>
          * Satın alınan ürünler kullanıcılar tarafından değerlendirilebilir
        </Note>
      </RatingCard>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        productId={productId}
        type="reviews"
      />
    </>
  );
};

export default RatingCardComponent;
