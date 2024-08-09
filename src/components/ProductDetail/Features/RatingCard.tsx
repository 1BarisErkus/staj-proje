import { FC, useState } from "react";
import { useSession } from "next-auth/react";
import { notify } from "@/lib/notify";
import { Rating } from "@smastrom/react-rating";
import {
  RatingCard,
  RatingTitle,
  RatingCount,
  WriteReviewButton,
  Note,
} from "@/styles/ProductDetail/Features/Reviews";
import Modal from "./Modal";

type RatingCardProps = {
  productId: string;
  count: number;
};

const RatingCardComponent: FC<RatingCardProps> = ({ productId, count }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const session = useSession();

  const openModal = () => {
    if (!(session.data?.user as { uid: string })?.uid) {
      notify("Yorum yapabilmek için giriş yapmalısınız", "error");
      return;
    }
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <RatingCard>
        <RatingTitle>Ürün Değerlendirmeleri</RatingTitle>
        <RatingCount>{count} kere puanlandı</RatingCount>
        <Rating value={0} style={{ maxWidth: "100px" }} readOnly />
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
        userId={(session.data?.user as { uid: string })?.uid}
      />
    </>
  );
};

export default RatingCardComponent;
